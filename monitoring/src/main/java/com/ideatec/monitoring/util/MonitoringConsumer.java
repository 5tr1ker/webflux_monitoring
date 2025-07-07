package com.ideatec.monitoring.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.ideatec.monitoring.config.SseConfig;
import lombok.RequiredArgsConstructor;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Component;

import java.util.HashMap;

@Component
@RequiredArgsConstructor
public class MonitoringConsumer {

    private final SseConfig sseConfig;

    @KafkaListener(topics = "db_topic" , groupId = "group_01")
    public HashMap<?,?> monitorConsumer_db(ConsumerRecord consumerRecord) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonString = consumerRecord.value().toString();

            HashMap<String, Object> data = new HashMap<>();
            data.put("message" , jsonString);

            sseConfig.send(objectMapper.writeValueAsString(data) , jsonString , "db");
            System.out.println("db_topic 데이터 전송 : " + data);
            return data;
        } catch (JsonProcessingException E) {
            System.out.println("JSON 파싱 불가 : " + consumerRecord.value());

            return null;
        }
    }

    @KafkaListener(topics = "error_topic" , groupId = "group_01")
    public HashMap<?,?> monitorConsumer_error(ConsumerRecord consumerRecord) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            String jsonString = consumerRecord.value().toString();

            HashMap<String, Object> data = new HashMap<>();
            data.put("message" , jsonString);

            sseConfig.send(objectMapper.writeValueAsString(data) , jsonString , "error");
            System.out.println("error_topic 데이터 전송 : " + data);
            return data;
        } catch (JsonProcessingException E) {
            System.out.println("JSON 파싱 불가 : " + consumerRecord.value());

            return null;
        }
    }
}
