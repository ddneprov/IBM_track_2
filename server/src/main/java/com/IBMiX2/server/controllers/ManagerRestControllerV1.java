package com.IBMiX2.server.controllers;

import com.IBMiX2.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping(value = "/api/v1/manager/")
public class ManagerRestControllerV1 {

    private final UserService userService;

    @Autowired
    public ManagerRestControllerV1(UserService userService) {
        this.userService = userService;
    }

    @GetMapping(value = "{id}")
    public String getUserById(@PathVariable(name = "id") Integer id) {
        return "ahahhaha";
    }

    @RequestMapping(value= "isUserExist", method = RequestMethod.GET)
    public String isUserExistCheck(){
        return "ahahahahahhaha";
    }

}
