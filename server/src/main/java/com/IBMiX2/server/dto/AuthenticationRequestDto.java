package com.IBMiX2.server.dto;

import lombok.Data;



@Data
public class AuthenticationRequestDto {
    private String userLogin;
    private String userPassword;
}
