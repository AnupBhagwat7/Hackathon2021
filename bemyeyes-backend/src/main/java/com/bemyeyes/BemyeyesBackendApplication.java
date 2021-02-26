package com.bemyeyes;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@EntityScan(basePackages = {"com.bymyeyes.entity"} )
@EnableJpaRepositories(basePackages = {"com.bymyeyes.repository"})
@SpringBootApplication
@RestController
public class BemyeyesBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BemyeyesBackendApplication.class, args);
	}

	@GetMapping("/")
	public String hello() {
		return "hello world!";
	}
}