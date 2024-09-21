<?php
$host = 'localhost';
$usuario = 'root'; 
$senha = '';
$banco = 'estoque_farmacia';


$conexao = new mysqli($host, $usuario, $senha, $banco);


if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
} else {
    echo "Conexão bem-sucedida!";
}
?>
