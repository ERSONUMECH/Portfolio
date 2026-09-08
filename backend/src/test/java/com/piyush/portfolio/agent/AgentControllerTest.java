package com.piyush.portfolio.agent;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.piyush.portfolio.config.WebConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(AgentController.class)
@Import({AgentService.class, WebConfig.class})
class AgentControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @Test
    void healthReturnsAgentStatus() throws Exception {
        mockMvc.perform(get("/api/health"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.status").value("ok"))
            .andExpect(jsonPath("$.agent").value("PIYUSH AI"));
    }

    @Test
    void routesWebApplicationRequests() throws Exception {
        postMessage("I need a web application")
            .andExpect(jsonPath("$.intent").value("web application"))
            .andExpect(jsonPath("$.nextSteps.length()").value(3));
    }

    @Test
    void routesAutomationRequests() throws Exception {
        postMessage("Help me automate this workflow")
            .andExpect(jsonPath("$.intent").value("automation solution"))
            .andExpect(jsonPath("$.reply", containsString("automation")));
    }

    @Test
    void routesAiAgentRequests() throws Exception {
        postMessage("I need an AI assistant")
            .andExpect(jsonPath("$.intent").value("AI agent"))
            .andExpect(jsonPath("$.reply", containsString("AI agent")));
    }

    @Test
    void routesContentRequests() throws Exception {
        postMessage("I want an AI video workflow")
            .andExpect(jsonPath("$.intent").value("AI video and content workflow"))
            .andExpect(jsonPath("$.nextSteps[0]").value("Define the content format and audience"));
    }

    @Test
    void fallsBackToDiscoveryForUnclassifiedRequests() throws Exception {
        postMessage("I have a new business idea")
            .andExpect(jsonPath("$.intent").value("discovery conversation"))
            .andExpect(jsonPath("$.nextSteps.length()").value(3));
    }

    @Test
    void rejectsBlankMessages() throws Exception {
        mockMvc.perform(post("/api/agent/chat")
                .contentType(MediaType.APPLICATION_JSON)
                .content("{\"message\":\" \"}"))
            .andExpect(status().isBadRequest());
    }

    private org.springframework.test.web.servlet.ResultActions postMessage(String message) throws Exception {
        return mockMvc.perform(post("/api/agent/chat")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"message\":\"" + message + "\"}"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.agent").value("PIYUSH AI"));
    }
}
