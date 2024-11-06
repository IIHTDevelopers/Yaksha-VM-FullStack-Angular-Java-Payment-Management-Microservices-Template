package org.training.users.configuration;

import org.springframework.cloud.openfeign.FeignClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import feign.codec.ErrorDecoder;

@Configuration
public class FeignClientConfiguration extends FeignClientProperties.FeignClientConfiguration {

	@Bean
	public ErrorDecoder errorDecoder() {
		// write your logic here
		return null;
	}
}
