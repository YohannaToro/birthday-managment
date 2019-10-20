package edu.eci.arem.demo.model;



public class Saludo{
    private String nombre;
    private String apellido;
    private int dia;
    private int mes;
    private String correo;
    private String perfil;
    private String observacion;
      public Saludo(String description){
        this.nombre  = description;
    }

    public String getApellido() {
        return this.apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public int getDia() {
        return this.dia;
    }

    public void setDia(int dia) {
        this.dia = dia;
    }

    public int getMes() {
        return this.mes;
    }

    public void setMes(int mes) {
        this.mes = mes;
    }

    public String getCorreo() {
        return this.correo;
    }

    public void setCorreo(String correo) {
        this.correo = correo;
    }

    public String getPerfil() {
        return this.perfil;
    }

    public void setPerfil(String perfil) {
        this.perfil = perfil;
    }

    public String getObservacion() {
        return this.observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }
    


    public Saludo(){
        
    }

  

    public String getDescription() {
        return nombre;
    }

    public void setDescription(String description) {
        this.nombre = description;
    }

}