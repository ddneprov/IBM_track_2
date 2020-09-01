package com.IBMiX2.server.dto;

import com.IBMiX2.server.domain.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;



@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class AdminUserDto {

    private Integer userId;
    private String userName;
    private String userSurname;
    private String userPatronymic;
    private String userLogin;
    private String userType;

    public User toUser() {
        User user = new User();
        user.setUserId(userId);
        user.setUserName(userName);
        user.setUserSurname(userSurname);
        user.setUserPatronymic(userPatronymic);
        user.setUserLogin(userLogin);
        user.setUserType(userType);
        return user;
    }

    public static AdminUserDto fromUser(User user) {
        AdminUserDto adminUserDto = new AdminUserDto();
        adminUserDto.setUserId(user.getUserId());
        adminUserDto.setUserName(user.getUserName());
        adminUserDto.setUserSurname(user.getUserSurname());
        adminUserDto.setUserPatronymic(user.getUserPatronymic());
        adminUserDto.setUserLogin(user.getUserLogin());
        adminUserDto.setUserType(user.getUserType());
        return adminUserDto;
    }
}
