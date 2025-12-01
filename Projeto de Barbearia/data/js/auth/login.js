async function fazerLogin() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();
    const erro = document.getElementById("erro");

    erro.textContent = ""; // limpar mensagem

    if (!email || !senha) {
        erro.textContent = "Preencha todos os campos.";
        return;
    }

    try {
        const response = await fetch("../data/js/auth/users.json");
        const users = await response.json();

        const user = users.find(u => u.email === email && u.senha === senha);

        if (!user) {
            erro.textContent = "Usuário ou senha inválidos.";
            return;
        }

        // salvar sessão no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(user));

        // redirecionamento por tipo
        if (user.tipo === "barbeiro") {
            window.location.href = "../pages/barber_dashboard.html";
        } else {
            window.location.href = "../pages/client_dashboard.html";
        }

    } catch (e) {
        console.error("Erro ao carregar users.json", e);
        erro.textContent = "Erro interno ao tentar fazer login.";
    }
}
