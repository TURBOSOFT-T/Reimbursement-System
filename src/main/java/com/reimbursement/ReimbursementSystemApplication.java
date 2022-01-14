package com.reimbursement;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.reimbursement.models.Reimbursement;
import com.reimbursement.models.User;
import com.reimbursement.repositories.ReimbursementRepository;
import com.reimbursement.repositories.UserRepository;

@SpringBootApplication
@EnableAutoConfiguration
public class ReimbursementSystemApplication implements CommandLineRunner {
	@Autowired
	private ReimbursementRepository reimbursementRepository;
	@Autowired
	private UserRepository userRepository;

	public static void main(String[] args) {
		SpringApplication.run(ReimbursementSystemApplication.class, args);

		System.out.println("Application started very  well..................");
	}

	@Override
	public void run(String... args) throws Exception {
		// TODO Auto-generated method stub
		//User user = new User(null, "Thomas", null);
		//userRepository.save(user);
		//User user1 = new User(null, null, null);
		//userRepository.save(user1);
		
		

		Reimbursement reimbursement = new Reimbursement(null, "ttt", "rrrr", 10, false, null);
		reimbursementRepository.save(reimbursement);
		

		Reimbursement reimbursement1 = new Reimbursement(null, "hhh", "gggg", 8, true, null);
		reimbursementRepository.save(reimbursement1);
		
		

	}

}
