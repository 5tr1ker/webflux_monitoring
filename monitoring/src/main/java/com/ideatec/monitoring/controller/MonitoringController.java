package com.ideatec.monitoring.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Sinks;

@RestController
@RequiredArgsConstructor
public class MonitoringController {

    private final Sinks.Many<String> sseSink;

    @CrossOrigin(value = "http://localhost:3000")
    @GetMapping(value = "/sse" , produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<?> connectMonitoring() {
        return sseSink.asFlux();
    }

}
