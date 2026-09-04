package com.alan.springbootdemo.service;

import com.alan.springbootdemo.dto.UserRequest;
import com.alan.springbootdemo.dto.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    UserResponse getUserById(Long id);

    List<UserResponse> getAllUsers();

    UserResponse updateUser(Long id, UserRequest request);

    void deleteUser(Long id);

}