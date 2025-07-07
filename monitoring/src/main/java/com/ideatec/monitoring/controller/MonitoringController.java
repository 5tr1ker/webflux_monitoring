package com.ideatec.monitoring.controller;

import com.ideatec.monitoring.config.SseConfig;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

@RestController
@RequiredArgsConstructor
public class MonitoringController {

    private final SseConfig sseConfig;

    @CrossOrigin(value = "http://localhost:3000")
    @GetMapping(value = "/sse" , produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> connectMonitoring(@RequestParam String type) {
        return Flux.create(sink -> sseConfig.addSink(sink, type));
    }

}
