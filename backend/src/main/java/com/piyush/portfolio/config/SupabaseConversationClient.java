package com.piyush.portfolio.config;

import com.piyush.portfolio.agent.AgentController;
import java.time.Instant;
import java.util.Map;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestClient;

@Component
public class SupabaseConversationClient {
    private static final Logger logger = LoggerFactory.getLogger(SupabaseConversationClient.class);

    private final RestClient restClient;
    private final String serviceRoleKey;

    public SupabaseConversationClient(
        RestClient.Builder restClientBuilder,
        @Value("${supabase.url}") String supabaseUrl,
        @Value("${supabase.service-role-key}") String serviceRoleKey
    ) {
        this.restClient = restClientBuilder.baseUrl(supabaseUrl).build();
        this.serviceRoleKey = serviceRoleKey;
    }

    public void save(String message, String name, String email, AgentController.AgentResponse response) {
        if (serviceRoleKey.isBlank()) {
            return;
        }

        try {
            restClient.post()
                .uri("/agent_conversations")
                .header("apikey", serviceRoleKey)
                .header("Authorization", "Bearer " + serviceRoleKey)
                .header("Prefer", "return=minimal")
                .body(Map.of(
                    "message", message,
                    "name", name == null ? "" : name,
                    "email", email == null ? "" : email,
                    "intent", response.intent(),
                    "reply", response.reply(),
                    "created_at", Instant.now().toString()
                ))
                .retrieve()
                .toBodilessEntity();
        } catch (RuntimeException exception) {
            logger.warn("Could not save agent conversation to Supabase", exception);
        }
    }
}