package com.IBMiX2.server.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;


@Entity
public class User {

    @Id
    @GeneratedValue
    private Integer userId;

    private String name;

    private String surname;

    private String secondName;

    private String login;

    private String password;

    private String userType;

    public User(Integer userId, String name,String surname, String secondName, String login, String password, String userType){
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.secondName = secondName;
        this.login = login;
        this.password = password;
        this.userType = userType;
    }

    public User() {}


    public Integer getUserId() {
        return userId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUserType() {
        return userType;
    }

    public void setUserType(String userType) {
        this.userType = userType;
    }
}
