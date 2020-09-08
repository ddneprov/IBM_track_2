package com.IBMiX2.server.dto;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.domain.UserRole;
import com.IBMiX2.server.domain.UserStatus;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;

import java.util.Date;

@Data
@JsonIgnoreProperties(ignoreUnknown = true)
public class UserDto {

    private Integer userId;
    private UserRole userRole;
    private String userLogin;
    private UserStatus userStatus;
    private String firstName;
    private String lastName;
    private String patronymic;
    private String crewRole;
    private Date standingFromDate;
    private Date standingFromDateInRole;
    private Integer reliabilityIndex;
    private Integer rewardsAndPunishments;


    public User toUser(){
        User user = new User();
        user.setUserId(userId);
        user.setUserRole(userRole);
        user.setUserLogin(userLogin);
        user.setUserStatus(userStatus);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPatronymic(patronymic);
        user.setCrewRole(crewRole);
        user.setStandingFromDate(standingFromDate);
        user.setStandingFromDateInRole(standingFromDateInRole);
        user.setReliabilityIndex(reliabilityIndex);
        user.setRewardsAndPunishments(rewardsAndPunishments);
        return user;
    }

    public static UserDto fromUser(User user) {
        UserDto userDto = new UserDto();
        userDto.setUserId(user.getUserId());
        userDto.setUserRole(user.getUserRole());
        userDto.setUserLogin(user.getUserLogin());
        userDto.setUserStatus(user.getUserStatus());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());
        userDto.setPatronymic(user.getPatronymic());
        userDto.setCrewRole(user.getCrewRole());
        userDto.setStandingFromDate(user.getStandingFromDate());
        userDto.setStandingFromDateInRole(user.getStandingFromDateInRole());
        userDto.setReliabilityIndex(user.getReliabilityIndex());
        userDto.setRewardsAndPunishments(user.getRewardsAndPunishments());
        return userDto;
    }
}
