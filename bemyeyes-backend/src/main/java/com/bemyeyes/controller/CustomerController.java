package com.bemyeyes.controller;

import java.io.IOException;
import java.util.logging.Level;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bymyeyes.entity.Customer;
import com.bymyeyes.repository.CustomerRepository;
import com.google.gson.Gson;

@RestController
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @RequestMapping("/customer/findAll")
    public Iterable<Customer> hello() {
        return customerRepository.findAll();
    }
    @RequestMapping(value = "/customers", method = RequestMethod.POST)
	String saveCustomer(@RequestBody String data) throws IOException {
		
		  Gson gson = new Gson(); Customer 
		  cust = gson.fromJson(data, Customer.class);
		 
		customerRepository.save(cust);
		return "Customer data saved successfully\n";
	}
}
