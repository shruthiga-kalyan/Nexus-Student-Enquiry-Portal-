package com.example.backend.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.authentication.configuration.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.backend.Entity.JwtRequest;
import com.example.backend.Entity.JwtResponse;
import com.example.backend.Entity.Users;
import com.example.backend.Repo.UserRepo;
import com.example.backend.util.JWTUtil;

// import com.webzy.jwt.dao.AppUserRepo;
// import com.webzy.jwt.entity.AppUser;
// import com.webzy.jwt.entity.JwtRequest;
// import com.webzy.jwt.entity.JwtResponse;
// import com.webzy.jwt.util.JwtUtil;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class JwtServices implements UserDetailsService {

	private final UserRepo userRepo;

	private final JWTUtil jwtUtil;

	public static AuthenticationManager authenticationManager = null;

	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
		final List<GlobalAuthenticationConfigurerAdapter> configurers = new ArrayList<>();
		configurers.add(new GlobalAuthenticationConfigurerAdapter() {
			@Override
			public void configure(AuthenticationManagerBuilder auth) throws Exception {
				// auth.doSomething()
			}
		});
		authenticationManager = authConfig.getAuthenticationManager();
		return authConfig.getAuthenticationManager();
	}

	public JwtResponse createJwtToken(JwtRequest jwtRequest) throws Exception {
		String userEmail = jwtRequest.getUserEmail();
		String userPassword = jwtRequest.getUserPassword();

		String newUserName = userEmail;

		try {
			authenticate(newUserName, userPassword);
			final UserDetails userDetails = loadUserByUsername(newUserName);

			System.out.println("User Details: " + userDetails);

			if (userDetails != null && passwordEncoder().matches(userPassword, userDetails.getPassword())) {
				String newGeneratedToken = jwtUtil.generateToken(userDetails);
				Users user = userRepo.findByEmail(newUserName).get();
				return new JwtResponse(user, newGeneratedToken);
			}
		} catch (Exception ex) {
			return new JwtResponse("Invalid Credentials !");
		}

		return new JwtResponse("Invalid Credentials !");
	}

	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		Users user = userRepo.findByEmail(username).get();

		if (user != null) {
			return new User(user.getEmail(), user.getPassword(), getAuthorities(user));
		} else {
			throw new UsernameNotFoundException("Username is not valid");
		}
	}

	private Set getAuthorities(Users user) {
		Set authorities = new HashSet();

		
		authorities.add(new SimpleGrantedAuthority("ROLE_" + user.getUserRole()));

		return authorities;
	}

	private ResponseEntity<?> authenticate(String userName, String userPassword) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(userName, userPassword));
			return ResponseEntity.ok("Authentication successful");
		} catch (BadCredentialsException e) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("BAD CREDENTIALS");
		}
	}
}

