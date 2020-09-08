package com.IBMiX2.server.domain;


import lombok.Data;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
public class User {

    @Id
    @GeneratedValue
    private Integer userId;

    /**
     * Роль пользователя: менеджер/плот/админ
     */
    private UserRole userRole;

    /**
     * Почта пользователя
     */
    private String userLogin;

    /**
     * Статус пользователя. Может быть активен, не активен или удален
     */
    private UserStatus userStatus;

    /**
     * Имя пользователя
     */
    private String firstName;

    /**
     * Фамилия пользователя
     */
    private String lastName;

    /**
     * Отчество пользователя
     */
    private String patronymic;

    /**
     * Пароль пользователя
     */
    private String userPassword;

    /**
     * Должность пользователя
     */
    private String crewRole;

    /**
     * Стаж пилота
     */
    private Date standingFromDate;

    /**
     * Стаж в должности
     */
    private Date standingFromDateInRole;

    /**
     * Индекс надежности пользователя
     */
    private Integer reliabilityIndex;

    /**
     * Соотношение наград и наказаний. Значение может быть отрицательным
     */
    private Integer rewardsAndPunishments;



    public Integer getUserId() {
        return userId;
    }

    public void setUserId(Integer userId) {
        this.userId = userId;
    }

    public UserRole getUserRole() {
        return userRole;
    }

    public void setUserRole(UserRole userRole) {
        this.userRole = userRole;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public UserStatus getUserStatus() {
        return userStatus;
    }

    public void setUserStatus(UserStatus userStatus) {
        this.userStatus = userStatus;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPatronymic() {
        return patronymic;
    }

    public void setPatronymic(String patronymic) {
        this.patronymic = patronymic;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String userPassword) {
        this.userPassword = userPassword;
    }

    public String getCrewRole() {
        return crewRole;
    }

    public void setCrewRole(String crewRole) {
        this.crewRole = crewRole;
    }

    public Date getStandingFromDate() {
        return standingFromDate;
    }

    public void setStandingFromDate(Date standingFromDate) {
        this.standingFromDate = standingFromDate;
    }

    public Date getStandingFromDateInRole() {
        return standingFromDateInRole;
    }

    public void setStandingFromDateInRole(Date standingFromDateInRole) {
        this.standingFromDateInRole = standingFromDateInRole;
    }

    public Integer getReliabilityIndex() {
        return reliabilityIndex;
    }

    public void setReliabilityIndex(Integer reliabilityIndex) {
        this.reliabilityIndex = reliabilityIndex;
    }

    public Integer getRewardsAndPunishments() {
        return rewardsAndPunishments;
    }

    public void setRewardsAndPunishments(Integer rewardsAndPunishments) {
        this.rewardsAndPunishments = rewardsAndPunishments;
    }
}
