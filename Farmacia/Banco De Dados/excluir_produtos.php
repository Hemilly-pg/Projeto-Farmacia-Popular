<?php
include 'conexao.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    $sql = "DELETE FROM produtos WHERE id='$id'";

    if ($conexao->query($sql) === TRUE) {
        echo "Produto excluído com sucesso!";
    } else {
        echo "Erro: " . $sql . "<br>" . $conexao->error;
    }

    $conexao->close();
}
?>


<form method="post" action="">
    ID do Produto: <input type="number" name="id" required><br>
    <input type="submit" value="Excluir Produto">
</form>
