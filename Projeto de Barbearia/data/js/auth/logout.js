function logout() {
    localStorage.removeItem("user_session");
    window.location.href = "/pages/login.html";
}
