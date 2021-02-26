/*
 * Copyright 2017-2018 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.bemyeyes.controller;

import java.io.IOException;
import java.nio.charset.Charset;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.util.StreamUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bymyeyes.entity.Customer;
import com.bymyeyes.repository.CustomerRepository;
import com.google.gson.Gson;

/**
 * A REST Controller that exposes read and write operations on a Google Cloud Storage file
 * accessed using the Spring Resource Abstraction.
 *
 */
@RestController
public class WebController {


   Logger logger = Logger.getLogger(WebController.class.getName());

	@Value("gs://${gcs-resource-test-bucket}/my-file.txt")
	private Resource gcsFile;
	
	private final JdbcTemplate jdbcTemplate;
	
	public WebController(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	@GetMapping("/customers")
	public List<String> getCustomers() {
		return this.jdbcTemplate.queryForList("SELECT * FROM CUSTOMER_DETAILS").stream()
				.map((m) -> m.values().toString())
				.collect(Collectors.toList());
	}
	
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String readGcsFile() throws IOException {
		logger.log(Level.INFO, "reading file from bucket");
		return StreamUtils.copyToString(
				this.gcsFile.getInputStream(),
				Charset.defaultCharset()) + "\n";
	}
	
}
