package com.IBMiX2.server.dto;

import com.IBMiX2.server.domain.User;
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
    private String userRole;

    public User toUser() {
        User user = new User();
        user.setUserId(userId);
        user.setUserName(userName);
        user.setUserSurname(userSurname);
        user.setUserPatronymic(userPatronymic);
        user.setUserLogin(userLogin);
        user.setUserRole(userRole);
        return user;
    }

    public static ManagerUserDto fromUser(User user) {
        ManagerUserDto managerUserDto = new ManagerUserDto();
        managerUserDto.setUserId(user.getUserId());
        managerUserDto.setUserName(user.getUserName());
        managerUserDto.setUserSurname(user.getUserSurname());
        managerUserDto.setUserPatronymic(user.getUserPatronymic());
        managerUserDto.setUserLogin(user.getUserLogin());
        managerUserDto.setUserRole(user.getUserRole());
        return managerUserDto;
    }
}
