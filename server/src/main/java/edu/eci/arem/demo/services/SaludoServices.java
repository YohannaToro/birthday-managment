package edu.eci.arem.demo.services;

import java.sql.SQLException;
import java.util.List;

import org.springframework.stereotype.Service;

import edu.eci.arem.demo.model.Saludo;



@Service
public interface SaludoServices {

    public List<Saludo> list() throws SQLException;
    public void create(Saludo sa)  throws SQLException;
    public Saludo getUser(String name) throws SQLException;
	
}
