package com.bymyeyes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.bymyeyes.entity.Customer;

/**
 * A sample repository for Customer entities.
 *
 */
@RepositoryRestResource(collectionResourceRel = "customer", path = "customer")
public interface CustomerRepository extends JpaRepository<Customer, Long> {
	Customer findByName(@Param("firstName") String name);

    @Query("select c.active from Customer c where c.firstName = :firstName")
    Boolean isActive(@Param("firstName") String name);
}
