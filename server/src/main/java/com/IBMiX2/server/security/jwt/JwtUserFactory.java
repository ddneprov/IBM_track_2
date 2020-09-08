package com.IBMiX2.server.security.jwt;

import com.IBMiX2.server.domain.User;
import com.IBMiX2.server.domain.UserRole;
import com.IBMiX2.server.domain.UserStatus;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.ArrayList;
import java.util.List;

public final class JwtUserFactory {

    public JwtUserFactory(){}

    public static JwtUser create(User user){
        return new JwtUser(
                user.getUserId(),
                user.getUserLogin(),

                user.getUserStatus().toString(),
                user.getFirstName(),
                user.getLastName(),
                user.getPatronymic(),

                user.getUserPassword(),
                user.getCrewRole(),
                user.getStandingFromDate(),
                user.getStandingFromDateInRole(),
                user.getReliabilityIndex(),
                user.getRewardsAndPunishments(),
                user.getUserStatus().equals(UserStatus.ACTIVE),
                mapToGrantedAuthorities(user.getUserRole()));
    }


    private static List<GrantedAuthority> mapToGrantedAuthorities(UserRole role){
        List <GrantedAuthority> grantedAuthorities = new ArrayList<>();
        grantedAuthorities.add(new SimpleGrantedAuthority(role.toString()));
        return grantedAuthorities;
    }
}
