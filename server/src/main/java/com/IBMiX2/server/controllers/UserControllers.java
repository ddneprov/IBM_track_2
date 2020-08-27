package com.IBMiX2.server.controllers;


import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.reprisitory.UserReprisitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
@RequestMapping("/users")
public class UserControllers {

    @Autowired
    private UserReprisitory userReprisitory;


    @RequestMapping(value = "/setNewUser", method = RequestMethod.POST)
    public String  setNewPlayer(@RequestBody User user){
        userReprisitory.save(user);
        return "OK" + "\n" + user.toString();
    }

    @RequestMapping(value= "/isUserExist", method = RequestMethod.GET)
    public Boolean  isUserExistCheck(@RequestBody ArrayList<String> userLog){
        return userReprisitory.findFirstByUserLoginAndUserPassword(userLog.get(0), userLog.get(1)) != null;
    }
}
