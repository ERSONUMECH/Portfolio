package com.piyush.portfolio.persona;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface PersonaServiceUsageRepository extends MongoRepository<PersonaServiceUsage, String> {
}