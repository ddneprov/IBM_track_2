package com.IBMiX2.server.controllers.impl;


import com.IBMiX2.server.dto.AuthenticationRequestDto;
import com.IBMiX2.server.security.jwt.JwtTokenProvider;
import com.IBMiX2.server.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping(value = "/api/v1/auth/")
public class AuthenticationRestControllerV1 {

   // private final AuthenticationManager authenticationManager;
   // private final JwtTokenProvider jwtTokenProvider;
    private final UserService userService;

    @Autowired
    public AuthenticationRestControllerV1(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("login")
    public ResponseEntity login(@RequestBody AuthenticationRequestDto requestDto) {
        return userService.login(requestDto);
    }
}
