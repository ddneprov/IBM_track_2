package com.IBMiX2.server.service;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.dto.AuthenticationRequestDto;
import com.IBMiX2.server.dto.UserDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;
import java.util.List;

public interface UserService {

    String setNewUser(User user) throws JsonProcessingException;

    List<User> getAllUsers();

    User findUserById(Integer idUser);

    User findUserByUserLogin(String userLogin);

    String isUserExistCheck(ArrayList<String> userLogInfo);

    String resetUserLogin(ArrayList<String> userLogInfo);

    String resetUserPassword(ArrayList<String> userLogInfo);

    List<User> getAllPilots();

    ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Integer id);
}
