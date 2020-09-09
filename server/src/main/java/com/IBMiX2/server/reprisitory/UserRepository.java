package com.IBMiX2.server.reprisitory;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.domain.UserRole;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, String> {

    public List<User> findAll();
    public User findFirstByUserId(Integer userId);
    public User findFirstByUserLoginAndUserPassword(String userLogin, String userPassword);
    public User findUserByUserLogin(String userLogin);
    public List<User> findAllByUserRole(UserRole userRole);
}
