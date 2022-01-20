package com.reimbursement.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.reimbursement.exception.ResourceNotFoundException;
import com.reimbursement.models.Reimbursement;
import com.reimbursement.repositories.ReimbursementRepository;
import com.reimbursement.repositories.UserRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class RiembusementController {

	@Autowired
	private ReimbursementRepository reimbursementRepository;
	@Autowired
	private UserRepository userRepository;
	
	/*
	 * @GetMapping("/reimbursements1") public Page<Reimbursement>
	 * getAllReimbursements1( Pageable pageable) { return
	 * reimbursementRepository.findAll( pageable);
	 * 
	 * }
	 */
	@GetMapping("/reimbursements")
    public List<Reimbursement> getAllReimbursements() {
        return reimbursementRepository.findAll();
    }
	/*
	 * @GetMapping("/users/{reimbursementId}/reimbursements") public
	 * Page<Reimbursement> getAllReimbursementsByUserId(@PathVariable(value =
	 * "userId") Long userId, Pageable pageable) { return
	 * reimbursementRepository.findByUserId(userId, pageable); }
	 */

	@PostMapping("/reimbursements")
	public Reimbursement createReimbursement(@Valid @RequestBody Reimbursement reimbursement) {
		return reimbursementRepository.save(reimbursement);
	}
	@GetMapping("/reimbursements/{id}")
	public ResponseEntity<Reimbursement> getReimbursementById(@PathVariable(value = "id") Long id)
			throws ResourceNotFoundException {
		Reimbursement reimbursement = reimbursementRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("reimbursement not found for this id :: " + id));
		return ResponseEntity.ok().body(reimbursement);
	}

	@PutMapping("/reimbursements/{id}")
	public ResponseEntity<Reimbursement> updateReimbursement(@PathVariable(value = "id") Long Id,
			@Valid @RequestBody Reimbursement reimbursementtDetails) throws ResourceNotFoundException {
		Reimbursement reimbursement = reimbursementRepository.findById(Id)
				.orElseThrow(() -> new ResourceNotFoundException("Reimbursement not found for this id :: " + Id));

		reimbursement.setTitle(reimbursementtDetails.getTitle());
		reimbursement.setReason(reimbursementtDetails.getReason());
		reimbursement.setAmount(reimbursementtDetails.getAmount());
		
		
		final Reimbursement updatedReimbursement = reimbursementRepository.save(reimbursement);
		return ResponseEntity.ok(updatedReimbursement);
	}
	@DeleteMapping("/reimbursements/{id}")
	public Map<String, Boolean> deleteReimbursement(@PathVariable(value = "id") Long reimbursementId)
			throws ResourceNotFoundException {
		Reimbursement reimbursement = reimbursementRepository.findById(reimbursementId)
				.orElseThrow(() -> new ResourceNotFoundException("eimbursement not found for this id :: " + reimbursementId));

		reimbursementRepository.delete(reimbursement);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}

}
