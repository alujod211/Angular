<?php
function retornarConexion() {
  $con=mysqli_connect("localhost:3306","admin01","hola01","bd1");
  return $con;
}
?>