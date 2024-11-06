package org.training.users.configuration;

import org.training.users.exception.GlobalException;

import feign.Response;
import feign.codec.ErrorDecoder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class FeignClientErrorDecoder implements ErrorDecoder {

	@Override
	public Exception decode(String s, Response response) {
		// write your logic here
		return null;
	}

	private GlobalException extractGlobalException(Response response) {
		// write your logic here
		return null;
	}
}
