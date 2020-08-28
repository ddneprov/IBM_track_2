package com.IBMiX2.server.reprisitory;

import com.IBMiX2.server.domain.User;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface UserReprisitory extends CrudRepository<User, String> {

    public List<User> findAll();
    public User findFirstByUserId(Integer userId);
    public User findFirstByUserLoginAndUserPassword(String userLogin, String userPassword);
    public User findUserByUserLogin(String userLogin);

}
