package com.IBMiX2.server.dto;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.domain.UserRole;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;



@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class ManagerUserDto {

    private Integer userId;
    private String userName;
    private String userSurname;
    private String userPatronymic;
    private String userLogin;
    private UserRole userRole;

    public User toUser() {
        User user = new User();
        user.setUserId(userId);
        user.setFirstName(userName);
        user.setLastName(userSurname);
        user.setPatronymic(userPatronymic);
        user.setUserLogin(userLogin);
        user.setUserRole(userRole);
        return user;
    }

    public static ManagerUserDto fromUser(User user) {
        ManagerUserDto managerUserDto = new ManagerUserDto();
        managerUserDto.setUserId(user.getUserId());
        managerUserDto.setUserName(user.getFirstName());
        managerUserDto.setUserSurname(user.getLastName());
        managerUserDto.setUserPatronymic(user.getPatronymic());
        managerUserDto.setUserLogin(user.getUserLogin());
        managerUserDto.setUserRole(user.getUserRole());
        return managerUserDto;
    }
}
