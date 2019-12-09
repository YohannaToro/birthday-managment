package edu.eci.arem.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import edu.eci.arem.demo.model.Saludo;
import edu.eci.arem.demo.persistence.SaludoPersistence;




@RestController
@CrossOrigin
public class Controller {

	@Autowired
	SaludoPersistence auctionRepository;
	
	@RequestMapping(value="/users",method = RequestMethod.GET)
	public ResponseEntity<?> listAllUsers(){
	    try {
	        return new ResponseEntity<>(auctionRepository.findAll(),HttpStatus.ACCEPTED);
	    } catch (Exception ex) {
	        return new ResponseEntity<>("mal",HttpStatus.NOT_FOUND);
	    }
	}
	@RequestMapping(value="/users/{id}",method = RequestMethod.GET)
	public ResponseEntity<?> getUser(@PathVariable("id") String id){
	    try {
	        return new ResponseEntity<>(auctionRepository.getUser(id),HttpStatus.ACCEPTED);
	    } catch (Exception ex) {
	        return new ResponseEntity<>("mal",HttpStatus.NOT_FOUND);
	    }
	}
	@PostMapping(value="/users/add")
	public ResponseEntity<?> postMethodName(@RequestBody Saludo sa) {

		//TODO: process POST request
		
		 try {
	        auctionRepository.create(sa);
		
		 return new ResponseEntity<>("done", HttpStatus.ACCEPTED);
	    } catch (Exception ex) {
	        return new ResponseEntity<>("no hizo post",HttpStatus.NOT_FOUND);
	    }
	}
	@PutMapping(value="/users/update")
	public ResponseEntity<?> updateMethodName(@RequestBody Saludo sa) {
		
		 try {
	        auctionRepository.Update(sa);
		
		 return new ResponseEntity<>("done", HttpStatus.ACCEPTED);
	    } catch (Exception ex) {
	        return new ResponseEntity<>("no hizo post",HttpStatus.NOT_FOUND);
	    }
	}
	
}