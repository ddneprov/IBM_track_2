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

    @RequestMapping(value = "/getUserNameById", method = RequestMethod.GET)
    public String  getUserNameById(@RequestBody Integer id){
        return userReprisitory.findFirstByUserId(id).getUserName();
    }

    @RequestMapping(value = "/getUserSurnameById", method = RequestMethod.GET)
    public String  getUserSurnameById(@RequestBody Integer id){
        return userReprisitory.findFirstByUserId(id).getUserSurname();
    }

    @RequestMapping(value = "/getUserPatronymicById", method = RequestMethod.GET)
    public String  getUserPatronymicById(@RequestBody Integer id){
        return userReprisitory.findFirstByUserId(id).getUserSecondName();
    }

    @RequestMapping(value = "/getUserTypeById", method = RequestMethod.GET)
    public String  getUserTypeById(@RequestBody Integer id){
        return userReprisitory.findFirstByUserId(id).getUserType();
    }

    @RequestMapping(value = "/getUserLoginById", method = RequestMethod.GET)
    public String  getUserLoginById(@RequestBody Integer id){
        return userReprisitory.findFirstByUserId(id).getUserLogin();
    }

    @RequestMapping(value = "/getUserIdByLogin", method = RequestMethod.GET)
    public Integer getUserIdByLogin(@RequestBody String login){
        return userReprisitory.findUserByUserLogin(login).getUserId();
    }

    @RequestMapping(value = "/setUserLoginById", method = RequestMethod.POST)
    public String setUserLoginById(@RequestBody ArrayList<String> userLog){
        int id = Integer.parseInt(userLog.get(0));
        String newLogin = userLog.get(1);
        User user = userReprisitory.findFirstByUserId(id);
        userReprisitory.delete(user);
        user.setUserLogin(newLogin);
        userReprisitory.save(user);
        return "Login successfully changed";
    }

    @RequestMapping(value = "/setUserPasswordById", method = RequestMethod.POST)
    public String setUserPasswordById(@RequestBody ArrayList<String> userLog){
        String password = userLog.get(1);
        int id = Integer.parseInt(userLog.get(0));
        User user = userReprisitory.findFirstByUserId(id);
        userReprisitory.delete(user);
        user.setUserPassword(password);
        userReprisitory.save(user);
        return "Password successfully changed";
    }
}
