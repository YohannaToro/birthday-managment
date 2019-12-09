package edu.eci.arem.demo;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import javax.sql.DataSource;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import edu.eci.arem.demo.model.Saludo;
import edu.eci.arem.demo.persistence.SaludoPersistence;



@Component
public class PostgresRepository implements SaludoPersistence {
	
	
	@Autowired
	private DataSource dataSource;
	
	@Override
	public List<Saludo> findAll() throws SQLException {
		String query = "SELECT * FROM informacion;";
		List<Saludo> auctions = new ArrayList<Saludo>();
		Connection connection = null;
		try {
			connection = dataSource.getConnection();
			Statement stmt = connection.createStatement();
			ResultSet rs = stmt.executeQuery(query);
			while (rs.next()) {
				Saludo auction = new Saludo();
				//auction.setDescription(rs.getString("nombre"));
				auction.setApellido(rs.getString("apellido"));
				auction.setDia(Integer.parseInt(rs.getString("dia")));
				auction.setMes(Integer.parseInt(rs.getString("mes")));
				auction.setCorreo(rs.getString("correo"));
				auction.setPerfil(rs.getString("perfil"));
				auction.setObservacion(rs.getString("observacion"));


				auctions.add(auction);
			}
			connection.close();
			return auctions;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			throw new RuntimeException(e);
		}
	
	}

	@Override
	public void create(Saludo sa) throws SQLException {
		String na=sa.getDescription(); String ap=sa.getApellido();
		String di=Integer.toString(sa.getDia());String me=Integer.toString(sa.getMes());
		String pe=sa.getPerfil();String co=sa.getCorreo(); String ob=sa.getObservacion();
		String query = "insert Into informacion values ('"+na+"','"+ap+"','"+di+"','"+me+"','"+co+"','"+pe+"','"+ob+"','"+null+"','"+null+"','"+null+"');";
        Connection connection = null;
		try {
			connection = dataSource.getConnection();
            Statement stmt = connection.createStatement();
            stmt.executeUpdate(query);
        }catch (Exception e) {
			System.out.println(e.getMessage());
			throw new RuntimeException(e);
		}
    }


	@Override
	public void Update(Saludo sa) throws SQLException {
		System.out.println(sa);
		String na=sa.getDescription(); String ap=sa.getApellido();
		String di=Integer.toString(sa.getDia());String me=Integer.toString(sa.getMes());
		String pe=sa.getPerfil();String co=sa.getCorreo(); String ob=sa.getObservacion();
		//String q="update into informacion set set dia='"+di+"';
		String query = "UPDATE informacion set dia='"+di+"', mes='"+me+"', observacion='"+ob+"', correo='"+co+"', perfil='"+pe+"' where apellido='"+ap+"';";
		System.out.println("query"+query);
		Connection connection = null;
		try {
			connection = dataSource.getConnection();
            Statement stmt = connection.createStatement();
            stmt.executeUpdate(query);
        }catch (Exception e) {
			System.out.println(e.getMessage());
			throw new RuntimeException(e);
		}
		

	}

	@Override
	public Saludo getUser(String name) {
		System.out.println("nombre"+name);
		String query = "SELECT * FROM informacion where apellido='"+name+"';";
		System.out.println(query);
		Connection connection = null;
		try {
			Saludo auction = new Saludo();
			List<Saludo> auctions = findAll();
			for (int i=0; i<auctions.size();i++){
				Saludo tmp=auctions.get(i);
				if (tmp.getApellido().equals(name)){
					auction=tmp;
				};
			};
			
			return auction;
		} catch (Exception e) {
			// TODO: handle exception
			System.out.println(e.getMessage());
			throw new RuntimeException(e);
		}
	
	}
		
	
}