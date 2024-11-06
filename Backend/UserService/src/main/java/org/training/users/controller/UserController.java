package org.training.users.controller;

import static org.training.users.constants.UriConstants.USERS_API;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.training.users.model.dto.Response;
import org.training.users.model.dto.UserDto;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(USERS_API)
public class UserController {

	@PostMapping("/register")
	public ResponseEntity<Response> createUser(@RequestBody UserDto userDto) {
		// write your logic here
		return null;
	}

	@GetMapping("/list")
	public ResponseEntity<List<UserDto>> getAllUsers() {
		// write your logic here
		return null;
	}

	@PostMapping("/{userId}")
	public ResponseEntity<Response> updateUser(@PathVariable("userId") Long userId, @RequestBody UserDto userDto) {
		// write your logic here
		return null;
	}

	@GetMapping("/productInfo/{userId}")
	public ResponseEntity<UserDto> getUserProductInfoByUserId(@PathVariable("userId") Long userId) {
		// write your logic here
		return null;
	}

}
