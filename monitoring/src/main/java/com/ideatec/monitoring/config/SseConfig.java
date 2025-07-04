package com.ideatec.monitoring.config;

import com.ideatec.monitoring.entity.Monitoring;
import com.ideatec.monitoring.repository.MonitoringRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;
import reactor.core.publisher.FluxSink;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

@Component
@RequiredArgsConstructor
public class SseConfig {

    private final Set<FluxSink<String>> sinks = ConcurrentHashMap.newKeySet();
    private final MonitoringRepository monitoringRepository;

    public void addSink(FluxSink<String> sink) {
        sinks.add(sink);

        System.out.println("새 SSE 연결 추가됨. 현재 연결 수: " + sinks.size());
        sink.onDispose(() -> {
            sinks.remove(sink);
            System.out.println("SSE 연결 해제됨. 현재 연결 수: " + sinks.size());
        });
    }

    public void send(String message, String originMessage) {
        LocalDateTime now = LocalDateTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

        Monitoring monitoring = Monitoring.builder().log(originMessage).createAt(now.format(formatter)).build();
        monitoringRepository.save(monitoring);

        sinks.forEach(sink -> {
            try {
                sink.next(message + "\n\n");
            } catch (Exception e) {
                System.out.println("SSE 전송 중 오류 발생: " + e.getMessage());
            }
        });
    }
}