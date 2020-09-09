package com.IBMiX2.server.service.impl;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.domain.UserRole;
import com.IBMiX2.server.reprisitory.UserRepository;
import com.IBMiX2.server.service.UserService;
import com.IBMiX2.server.ulits.StringUtils;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@NoArgsConstructor
@AllArgsConstructor(onConstructor = @__(@Autowired))
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    private static final Logger logger = LoggerFactory.getLogger(UserServiceImpl.class);
    private static final ObjectMapper mapper = new ObjectMapper();


    @Override
    public String setNewUser(User user) throws JsonProcessingException {
        userRepository.save(user);
        logger.info("setNewUser -> new user successfully registered {}", user);
        return mapper.writeValueAsString(user);
    }

    @Override
    public List<User> getAllUsers(){
        List<User> users = userRepository.findAll();
        logger.info("getAllUsers -> found {} users", users.size());
        return users;
    }

    @Override
    public List<User> getAllPilots(){
        List<User> pilotsList = userRepository.findAllByUserRole(UserRole.ROLE_PILOT);
        logger.info("getAllUsers -> found {} pilots", pilotsList.size());
        return pilotsList;
    }

    @Override
    public User findUserById(Integer idUser){
        User requiredUser = userRepository.findFirstByUserId(idUser);
        if (requiredUser == null)
            logger.info("findUserById -> No user found by id = {}", idUser);
        else
            logger.info("findUserById -> successfully found user by id {}, user - {}", idUser, requiredUser);
        return requiredUser;
    }

    @Override
    public User findUserByUserLogin(String userLogin){
        User requiredUser = userRepository.findUserByUserLogin(userLogin);
        if (requiredUser == null)
            logger.info("findUserByUserLogin -> No user found by userLogin = {}", userLogin);
        else
            logger.info("findUserByUserLogin -> successfully found user by userLogin {}, user - {}", userLogin, requiredUser);
        return requiredUser;
    }


    @Override
    public String isUserExistCheck(ArrayList<String> userLogInfo){
        return userRepository.findFirstByUserLoginAndUserPassword(userLogInfo.get(0), userLogInfo.get(1)) != null ? StringUtils.SUCCESS_MESSAGE : StringUtils.ERROR_MESSAGE;
    }

    @Override
    public String resetUserLogin(ArrayList<String> userLogInfo){
        logger.info("resetUserLogin -> Login successfully changed");
        Integer id = Integer.parseInt(userLogInfo.get(0));
        String newLogin = userLogInfo.get(1);
        User user = userRepository.findFirstByUserId(id);
        user.setUserLogin(newLogin);
        userRepository.save(user);
        return StringUtils.SUCCESS_MESSAGE;
    }

    @Override
    public String resetUserPassword(ArrayList<String> userLogInfo){
        logger.info("Password successfully changed");
        String password = userLogInfo.get(1);
        Integer id = Integer.parseInt(userLogInfo.get(0));
        User user = userRepository.findFirstByUserId(id);
        user.setUserPassword(password);
        userRepository.save(user);
        return StringUtils.SUCCESS_MESSAGE;
    }
}
