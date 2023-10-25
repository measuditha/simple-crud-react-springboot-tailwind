package com.crudBkaned.fullstackcrudBackend.repository;

import com.crudBkaned.fullstackcrudBackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}
