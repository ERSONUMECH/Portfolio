package com.piyush.portfolio.config;

import static org.springframework.test.web.client.match.MockRestRequestMatchers.header;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.jsonPath;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.method;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.requestTo;
import static org.springframework.test.web.client.response.MockRestResponseCreators.withSuccess;

import com.piyush.portfolio.agent.AgentController;
import java.net.URI;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.test.web.client.MockRestServiceServer;
import org.springframework.web.client.RestClient;

class SupabaseConversationClientTest {
    @Test
    void savesConversationWithSupabaseHeadersAndPayload() {
        RestClient.Builder restClientBuilder = RestClient.builder();
        MockRestServiceServer server = MockRestServiceServer.bindTo(restClientBuilder).build();
        SupabaseConversationClient client = new SupabaseConversationClient(
            restClientBuilder,
            "https://example.supabase.co/rest/v1",
            "test-service-role-key"
        );

        server.expect(requestTo(URI.create("https://example.supabase.co/rest/v1/agent_conversations")))
            .andExpect(method(HttpMethod.POST))
            .andExpect(header("apikey", "test-service-role-key"))
            .andExpect(header("Authorization", "Bearer test-service-role-key"))
            .andExpect(header("Prefer", "return=minimal"))
            .andExpect(jsonPath("$.message").value("I need an AI agent"))
            .andExpect(jsonPath("$.name").value("Piyush"))
            .andExpect(jsonPath("$.email").value("piyush@example.com"))
            .andExpect(jsonPath("$.intent").value("AI agent"))
            .andExpect(jsonPath("$.reply").value("I can help."))
            .andRespond(withSuccess().contentType(MediaType.APPLICATION_JSON));

        client.save(
            "I need an AI agent",
            "Piyush",
            "piyush@example.com",
            new AgentController.AgentResponse("PIYUSH AI", "AI agent", "I can help.", java.util.List.of())
        );

        server.verify();
    }
}