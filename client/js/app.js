function login() {
    const user = document.getElementById("userInput").value;
    const pass = document.getElementById("passwordInput").value;

    if (user === "" || pass === "") {
        alert("Preencha todos os campos!");
        return;
    }

    // Login provisório
    if (user === "admin" && pass === "123") {
        window.location.href = "dashboard.html"; // criar depois
    } else {
        alert("Usuário ou senha incorretos.");
    }
}
