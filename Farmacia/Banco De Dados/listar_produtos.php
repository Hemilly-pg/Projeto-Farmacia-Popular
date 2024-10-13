<?php
include 'conexao.php';

$sql = "SELECT * FROM produtos";
$resultado = $conexao->query($sql);

if ($resultado->num_rows > 0) {
    while ($produto = $resultado->fetch_assoc()) {
        echo "ID: " . $produto["id"] . "<br>";
        echo "Nome: " . $produto["nome"] . "<br>";
        echo "Descrição: " . $produto["descricao"] . "<br>";
        echo "Preço: R$ " . $produto["preco"] . "<br>";
        echo "Quantidade: " . $produto["quantidade"] . "<br>";
        echo "Data de Cadastro: " . $produto["data_cadastro"] . "<br><br>";
    }
} else {
    echo "Nenhum produto encontrado.";
}

$conexao->close();
?>
