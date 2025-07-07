package com.ideatec.monitoring.repository;

import com.ideatec.monitoring.entity.Monitoring;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MonitoringRepository extends MongoRepository<Monitoring, String> {

    List<Monitoring> findTop30ByLogTypeOrderByCreateAtDesc(String logType);

}
