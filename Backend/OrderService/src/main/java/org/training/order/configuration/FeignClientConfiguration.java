package org.training.order.configuration;

import org.springframework.cloud.openfeign.FeignClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.codec.ErrorDecoder;

@Configuration
public class FeignClientConfiguration extends FeignClientProperties.FeignClientConfiguration {

	/**
	 * Returns the error decoder for the Feign client.
	 *
	 * @return the error decoder
	 */
	@Bean
	public ErrorDecoder errorDecoder() {
		// write your logic here
		return null;
	}
}
