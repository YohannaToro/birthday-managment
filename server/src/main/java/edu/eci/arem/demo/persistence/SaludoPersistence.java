package edu.eci.arem.demo.persistence;

import java.sql.SQLException;
import java.util.List;

import edu.eci.arem.demo.model.Saludo;




public interface SaludoPersistence {
    public List<Saludo> findAll() throws SQLException ;  
    public void create(Saludo sa) throws SQLException ;
    public void Update(Saludo sa) throws SQLException;
    public void UploadFile(Saludo sa) throws SQLException;
	public Saludo getUser(String name);
}