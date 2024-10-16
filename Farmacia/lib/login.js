// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsb3OVVdJ7H5j_eOGPDJCZlhYowFnp1QM",
    authDomain: "farmacia-5770c.firebaseapp.com",
    projectId: "farmacia-5770c",
    storageBucket: "farmacia-5770c.appspot.com",
    messagingSenderId: "738317543773",
    appId: "1:738317543773:web:8f35afde989b88f3b9e0b4",
    measurementId: "G-VJKEE7DMB9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login with email and password
document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();  // Prevent form submission
    const email = document.getElementById("user").value;
    const password = document.getElementById("lock").value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Login successful
            const user = userCredential.user;
            alert("Login realizado com sucesso!");
            console.log(user);
            // Redireciona para a página desejada
            window.location.href = "../Pagina-inicial/index.html"; // Redirecione para a página que você quiser
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro no login: ${errorMessage}`);
        });
});

// Login with Google
document.getElementById("google-login").addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            alert("Login com Google realizado com sucesso!");
            console.log(user);
            // Redireciona para a página desejada
            window.location.href = "dashboard.html"; // Redirecione para a página que você quiser
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(`Erro no login com Google: ${errorMessage}`);
        });
});
