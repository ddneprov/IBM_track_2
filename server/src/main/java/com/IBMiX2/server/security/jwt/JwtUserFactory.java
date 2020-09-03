package com.IBMiX2.server.security.jwt;

import com.IBMiX2.server.domain.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

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
                user.getUserRole(),
                true,
                mapToGrantedAuthorities(user.getUserRole()));
    }


    private static List<GrantedAuthority> mapToGrantedAuthorities(String role){
        List <GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(role));
        return grantedAuthorities;
    }
}
