package org.training.users.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.training.users.model.dto.AuthRequest;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@PostMapping("/token")
	public String getToken(@RequestBody AuthRequest authRequest) {
		// write your logic here
		return null;
	}

	@GetMapping("/validate")
	public String validateToken(@RequestParam("token") String token) {
		// write your logic here
		return null;
	}
}
