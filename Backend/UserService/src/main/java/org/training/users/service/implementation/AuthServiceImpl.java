package org.training.users.service.implementation;

import org.springframework.stereotype.Service;
import org.training.users.service.AuthService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	@Override
	public String generateToken(String username) {
		// write your logic here
		return null;
	}

	@Override
	public void validateToken(String token) {
		// write your logic here
	}

}
