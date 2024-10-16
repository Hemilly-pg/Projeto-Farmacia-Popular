// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAsb3OVVdJ7H5j_eOGPDJCZlhYowFnp1QM",
    authDomain: "farmacia-5770c.firebaseapp.com",
    projectId: "farmacia-5770c",
    storageBucket: "farmacia-5770c.appspot.com",
    messagingSenderId: "738317543773",
    appId: "1:738317543773:web:8f35afde989b88f3b9e0b4",
    measurementId: "G-VJKEE7DMB9"
};

// Inicializa Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Função de cadastro por email e senha
document.getElementById("cadastro-form").addEventListener("submit", (e) => {
    e.preventDefault();  // Previne envio padrão do formulário

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmSenha = document.getElementById("confirm-senha").value;

    // Verifica se as senhas são iguais
    if (senha !== confirmSenha) {
        alert("As senhas não coincidem. Por favor, tente novamente.");
        return;
    }

    // Cadastra o usuário com email e senha
    auth.createUserWithEmailAndPassword(email, senha)
        .then((userCredential) => {
            // Cadastro bem-sucedido
            const user = userCredential.user;
            alert(`Cadastro realizado com sucesso! Bem-vindo, ${nome}`);
            console.log(user);

            // Redirecionar para uma página, se necessário
            window.location.href = "dashboard.html"; // Altere para a página que você deseja

        })
        .catch((error) => {
            // Lidar com erros
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro ao cadastrar: ${errorMessage}`);
        });
});

// Função de cadastro usando Google
document.getElementById("google-cadastro").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            // Cadastro com Google bem-sucedido
            const user = result.user;
            alert("Cadastro realizado com Google!");
            console.log(user);

            // Redirecionar para uma página, se necessário
            window.location.href = "dashboard.html"; // Altere para a página que você deseja
        })
        .catch((error) => {
            // Lidar com erros
            const errorMessage = error.message;
            alert(`Erro no cadastro com Google: ${errorMessage}`);
        });
});
