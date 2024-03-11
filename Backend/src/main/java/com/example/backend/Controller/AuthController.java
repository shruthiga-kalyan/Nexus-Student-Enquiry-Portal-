package com.example.backend.Controller;


import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Entity.JwtRequest;
import com.example.backend.Entity.JwtResponse;
import com.example.backend.Entity.Users;
import com.example.backend.Service.JwtServices;
import com.example.backend.Service.UserService;

import io.swagger.v3.oas.annotations.Operation;


import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5713")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/auth")
public class AuthController {

	private final JwtServices jwtService;
	
	private final UserService userService;

	@Operation(summary = "Authenticate user", description = "This API creates a JWT token for user authentication.")
	@PostMapping("/login")
	public JwtResponse createJwtToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		return jwtService.createJwtToken(jwtRequest);
	}

	@Operation(summary = "Register new user", description = "This API registers a new user.")
	@PostMapping("/register")
	public ResponseEntity<?> registerNewUser(@RequestBody Users user) {
		return userService.registerNewUser(user);
	}

}
