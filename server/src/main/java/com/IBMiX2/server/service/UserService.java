package com.IBMiX2.server.service;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.reprisitory.UserRepository;
import com.IBMiX2.server.ulits.StringUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserService {

    private UserRepository userRepository;

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private static final ObjectMapper mapper = new ObjectMapper();


    public String setNewUser(User user) throws JsonProcessingException {
        logger.info("New user successfully registered");
        userRepository.save(user);
        return mapper.writeValueAsString(user);
    }

    public String registerUser(ArrayList<String> userLogInfo){
        logger.info("Login successfully changed");
        Integer id = Integer.parseInt(userLogInfo.get(0));
        String newLogin = userLogInfo.get(1);
        User user = userRepository.findFirstByUserId(id);
        user.setUserLogin(newLogin);
        userRepository.save(user);
        return StringUtils.SUCCESS_MESSAGE;
    }


    public String resetUserPassword(ArrayList<String> userLogInfo){
        logger.info("Password successfully changed");
        String password = userLogInfo.get(1);
        Integer id = Integer.parseInt(userLogInfo.get(0));
        User user = userRepository.findFirstByUserId(id);
        user.setUserPassword(password);
        userRepository.save(user);
        return StringUtils.SUCCESS_MESSAGE;
    }

    public String isUserExistCheck(ArrayList<String> userLogInfo){
        return userRepository.findFirstByUserLoginAndUserPassword(userLogInfo.get(0), userLogInfo.get(1)) != null ? StringUtils.SUCCESS_MESSAGE : StringUtils.ERROR_MESSAGE;
    }
}
