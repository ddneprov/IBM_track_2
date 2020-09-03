package com.IBMiX2.server.controllers;


import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.service.UserService;

import com.fasterxml.jackson.core.JsonProcessingException;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/users")
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserControllers {

    private UserService userService;

    @RequestMapping(value = "/setNewUser", method = RequestMethod.POST)
    public String  setNewUser(@RequestBody User user) throws JsonProcessingException {
        return userService.setNewUser(user);
    }

    @RequestMapping(value= "/isUserExist", method = RequestMethod.GET)
    public String isUserExistCheck(@RequestBody ArrayList<String> userLogInfo){
        return userService.isUserExistCheck(userLogInfo);
    }

    @RequestMapping(value = "/setUserLoginById", method = RequestMethod.POST)
    public String setUserLoginById(@RequestBody ArrayList<String> userLogInfo){
        return userService.registerUser(userLogInfo);
    }

    @RequestMapping(value = "/setUserPasswordById", method = RequestMethod.POST)
    public String setUserPasswordById(@RequestBody ArrayList<String> userLogInfo){
        return userService.resetUserPassword(userLogInfo);
    }
}
