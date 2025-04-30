package com.sportsmatch.userservice.service;

import com.sportsmatch.common.model.User;
import java.util.Optional;

public interface UserService {
    User registerUser(User user);
    Optional<User> findByEmail(String email);
    User updateUser(User user);
    void deleteUser(Long id);
    boolean existsByEmail(String email);
} 