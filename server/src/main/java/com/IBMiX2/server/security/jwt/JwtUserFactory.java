package com.IBMiX2.server.security.jwt;

import com.IBMiX2.server.domain.User;
import org.springframework.security.core.parameters.P;

import java.util.Date;

public final class JwtUserFactory {

    public JwtUserFactory(){}


    public static JwtUser create(User user){
        return new JwtUser(
                user.getUserId(),
                user.getUserName(),
                user.getUserSurname(),
                user.getUserPatronymic(),
                user.getUserLogin(),
                user.getUserPassword(),
                user.getUserType(),
                true); //TODO: посмотри урок 40ая минута
    }

}
