package com.IBMiX2.server.security.jwt;

import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Date;

public class JwtUser implements UserDetails {

    private final Integer userId;
    private final String userName;
    private final String userSurname;
    private final String userPatronymic;
    private final String userLogin;
    private final String userPassword;
    private final String userType;
    private final boolean isEnable;
    //private final Date lastPasswordResetDate;

    public JwtUser(Integer userId, String userName, String userSurname, String userPatronymic, String userLogin,
                   String userPassword, String userType, boolean isEnable) {
        this.userId = userId;
        this.userName = userName;
        this.userSurname = userSurname;
        this.userPatronymic = userPatronymic;
        this.userLogin = userLogin;
        this.userPassword = userPassword;
        this.userType = userType;
        this.isEnable = isEnable;
        //this.lastPasswordResetDate = lastPasswordResetDate;
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }


    /**
 * TODO: поправить аннотации
* */
    public Integer getUserId() { return userId; }

    public String getUserName() {
        return userName;
    }

    public String getUserSurname() {
        return userSurname;
    }

    public String getUserPatronymic() {
        return userPatronymic;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public String getUserType() {
        return userType;
    }

    public boolean isEnable() {
        return isEnable;
    }

}
