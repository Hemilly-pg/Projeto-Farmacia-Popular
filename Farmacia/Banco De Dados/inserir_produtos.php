<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $descricao = $_POST['descricao'];
    $preco = $_POST['preco'];
    $quantidade = $_POST['quantidade'];

    $sql = "INSERT INTO produtos (nome, descricao, preco, quantidade) 
            VALUES ('$nome', '$descricao', '$preco', '$quantidade')";

    if ($conexao->query($sql) === TRUE) {
        echo "Produto inserido com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conexao->error;
    }

    $conexao->close();
}
?>


<form method="post" action="">
    Nome: <input type="text" name="nome" required><br>
    Descrição: <input type="text" name="descricao" required><br>
    Preço: <input type="text" name="preco" required><br>
    Quantidade: <input type="number" name="quantidade" required><br>
    <input type="submit" value="Inserir Produto">
</form>
