package com.ideatec.monitoring.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "monitoring")
@Getter
@AllArgsConstructor
@Builder
@ToString
public class Monitoring {

    @Id
    private String objectId;

    private String log;

    private String logType;

    private String createAt;

}
