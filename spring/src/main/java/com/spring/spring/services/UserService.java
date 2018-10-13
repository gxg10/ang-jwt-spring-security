package com.spring.spring.services;

import com.spring.spring.models.User;
import com.spring.spring.models.UserDto;

import java.util.List;

public interface UserService {

    User save(UserDto user);
    List<User> findAll();
    void delete(long id);
    User findOne(String username);

    User findById(Long id);
}