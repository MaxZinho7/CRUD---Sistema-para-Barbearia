function getSessionUser() {
    const data = localStorage.getItem("user_session");
    return data ? JSON.parse(data) : null;
}

document.addEventListener("DOMContentLoaded", () => {
    const user = getSessionUser();

    // mostra nome do perfil no header
    const usernameSpan = document.getElementById("usernameDisplay");
    if (usernameSpan && user) {
        usernameSpan.textContent = user.nome;
    }
});
