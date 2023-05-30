package com.example.todolistapi.config;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public OpenAPI springShopOpenAPI() {
        return new OpenAPI()
                .info(infoAPI());
    }
    public Info infoAPI() {
        return new Info().title("SpringDoc-TunisCamp")
                .description("TunisCamp Project")
                .contact(contactAPI());

    }
    public Contact contactAPI() {
        Contact contact = new Contact().name("Asma")
                .email("asmatra149@gmail.com")
                .url("https://www.linkedin.com/in/asma-trabelsi149/");
        return contact;
    }
}
