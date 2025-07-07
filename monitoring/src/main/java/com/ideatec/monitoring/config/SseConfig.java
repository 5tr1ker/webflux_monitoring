package com.ideatec.monitoring.config;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ideatec.monitoring.entity.Monitoring;
import com.ideatec.monitoring.repository.MonitoringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import reactor.core.publisher.FluxSink;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
@RequiredArgsConstructor
public class SseConfig {

    private final Set<FluxSink<String>> sinks_db = ConcurrentHashMap.newKeySet();
    private final Set<FluxSink<String>> sinks_error = ConcurrentHashMap.newKeySet();
    private final MonitoringRepository monitoringRepository;

    public void addSink(FluxSink<String> sink, String type) {
        if(type.equals("db")) {
            sinks_db.add(sink);
        }
        else if(type.equals("error")) {
            sinks_error.add(sink);
        } else {
            return;
        }

        sendPrevMessage(sink, type);

        System.out.printf("새 SSE 연결 추가됨. 현재 연결 수 : [ DB : %d  , ERROR : %d ]\n" , sinks_db.size() , sinks_error.size());
        sink.onDispose(() -> {
            if(type.equals("db")) {
                sinks_db.remove(sink);
            }
            else if(type.equals("error")) {
                sinks_error.remove(sink);
            }
            System.out.printf("SSE 연결 해제됨. 현재 연결 수 : [ DB : %d  , ERROR : %d ]\n" , sinks_db.size() , sinks_error.size());
        });
    }

    private void sendPrevMessage(FluxSink<String> sink, String type) {
        ObjectMapper objectMapper = new ObjectMapper();
        HashMap<String, Object> data = new HashMap<>();
        List<Monitoring> monitoring = monitoringRepository.findTop30ByLogTypeOrderByCreateAtDesc(type);
        StringBuilder sb = new StringBuilder();

        for(int i = monitoring.size() - 1; i > -1; i--) {
            sb.append(monitoring.get(i).getLog()).append("\n");
        }
        data.put("message" , sb);

        try {
            sink.next(objectMapper.writeValueAsString(data) + "\n\n");
        }
        catch (JsonProcessingException e) {
            throw new RuntimeException(e);
        };
    }

    public void send(String message, String originMessage, String type) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        Monitoring monitoring = Monitoring.builder().log(originMessage).logType(type).createAt(now.format(formatter)).build();
        monitoringRepository.save(monitoring);

        if(type.equals("db")) {
            sendToClient(message, sinks_db);
        }
        else if(type.equals("error")) {
            sendToClient(message, sinks_error);
        }
    }

    private void sendToClient(String message, Set<FluxSink<String>> sinkObject) {
        sinkObject.forEach(sink -> {
            try {
                sink.next(message + "\n\n");
            } catch (Exception e) {
                System.out.println("SSE 전송 중 오류 발생: " + e.getMessage());
            }
        });
    }

}