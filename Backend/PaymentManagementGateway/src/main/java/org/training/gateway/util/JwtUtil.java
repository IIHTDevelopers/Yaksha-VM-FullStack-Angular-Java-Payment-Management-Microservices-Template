package org.training.gateway.util;

import java.security.Key;

import org.springframework.stereotype.Component;

@Component
public class JwtUtil {

	public static final String SECRET = "5367566B59703373367639792F423F4528482B4D6251655468576D5A71347437";

	public void validateToken(final String token) {
		// write your logic here
	}

	private Key getSignKey() {
		// write your logic here
		return null;
	}
}
