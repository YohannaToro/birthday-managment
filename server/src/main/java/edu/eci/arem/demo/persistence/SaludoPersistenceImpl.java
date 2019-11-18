package edu.eci.arem.demo.persistence;

import java.sql.SQLException;
import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;

import edu.eci.arem.demo.model.Saludo;
import edu.eci.arem.demo.services.SaludoServices;


@Component
public class SaludoPersistenceImpl implements SaludoServices{
	
	@Autowired
	private SaludoPersistence auctionRepository;
	
	@Override
	public List<Saludo> list() throws SQLException {
		return auctionRepository.findAll();
	}

	@Override
	public void create(Saludo sa) throws SQLException {
		auctionRepository.create(sa);

	}

	@Override
	public Saludo getUser(String name) throws SQLException {
		
		return auctionRepository.getUser(name);
	}


}


