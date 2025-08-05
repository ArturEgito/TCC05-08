package com.finnfood.cantina;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CantinaApplication {
    public static void main(String[] args) {
        System.out.println("🚀 Iniciando FinnFood Backend com SQL Server...");
        SpringApplication.run(CantinaApplication.class, args);
        System.out.println("✅ Backend conectado ao SQL Server!");
        System.out.println("🔗 API Base: http://localhost:8080/api");
    }
}