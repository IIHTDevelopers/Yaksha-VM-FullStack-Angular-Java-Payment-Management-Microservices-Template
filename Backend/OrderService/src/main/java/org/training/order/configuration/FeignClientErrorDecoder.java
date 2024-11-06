package org.training.order.configuration;

import org.training.order.exception.GlobalException;

import feign.Response;
import feign.codec.ErrorDecoder;
import lombok.extern.slf4j.Slf4j;

@Slf4j
public class FeignClientErrorDecoder implements ErrorDecoder {

	/**
	 * Decodes the HTTP response and returns an exception if necessary.
	 *
	 * @param s        The string representation of the response body.
	 * @param response The HTTP response object.
	 * @return An exception object if necessary, or null if no exception is thrown.
	 */
	@Override
	public Exception decode(String s, Response response) {
		// write your logic here
		return null;
	}

	/**
	 * Extracts a GlobalException object from a Response object
	 *
	 * @param response The Response object to extract the GlobalException from
	 * @return The extracted GlobalException object, or null if extraction fails
	 */
	private GlobalException extractGlobalException(Response response) {
		// write your logic here
		return null;
	}
}
