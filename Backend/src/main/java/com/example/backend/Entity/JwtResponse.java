package com.example.backend.Entity;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class JwtResponse {


    
	public JwtResponse() {
	}

	public JwtResponse(Users user, String jwtToken) {
		super();
		this.user = user;
		this.jwtToken = jwtToken;
	}

	public JwtResponse(String string) {
		this.jwtToken = "Error: " + string;
	}

	private Users user;
	private String jwtToken;

	public Users getUser() {
		return user;
	}

	public void setUser(Users user) {
		this.user = user;
	}

	public String getJwtToken() {
		return jwtToken;
	}

	public void setJwtToken(String jwtToken) {
		this.jwtToken = jwtToken;
	}
}
