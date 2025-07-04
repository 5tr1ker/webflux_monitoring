package com.ideatec.monitoring.repository;

import com.ideatec.monitoring.entity.Monitoring;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MonitoringRepository extends MongoRepository<Monitoring, String> {
}
