package com.IBMiX2.server.controllers.impl;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.dto.UserDto;
import com.IBMiX2.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(value = "/api/v1/manager/")
public class ManagerRestControllerV1 {

    private final UserService userService;

    @Autowired
    public ManagerRestControllerV1(UserService userService) {
        this.userService = userService;
    }

    @RequestMapping(value = "getAllUsers", method = RequestMethod.GET)
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @RequestMapping(value = "getAllPilots", method = RequestMethod.GET)
    public List<User> getAllPilot(){
        return userService.getAllPilots();
    }

    @GetMapping(value = "getUser/{id}")
    public ResponseEntity<UserDto> getUserById(@PathVariable(name = "id") Integer id){
        return userService.getUserById(id);
    }

}
