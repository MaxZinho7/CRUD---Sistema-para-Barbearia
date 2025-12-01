document.addEventListener("DOMContentLoaded", () => {
    const user = getSessionUser();

    if (!user) {
        window.location.href = "/pages/login.html";
        return;
    }

    const path = window.location.pathname;

    const clientPages = [
        "/pages/client_dashboard.html",
        "/pages/appointment_booking.html",
        "/pages/client_management.html"
    ];

    const barberPages = [
        "/pages/barber_dashboard.html",
        "/pages/service_management.html",
        "/pages/schedule_management.html"
    ];

    if (user.tipo === "cliente" && barberPages.some(p => path.endsWith(p))) {
        window.location.href = "/pages/client_dashboard.html";
    }

    if (user.tipo === "barbeiro" && clientPages.some(p => path.endsWith(p))) {
        window.location.href = "/pages/barber_dashboard.html";
    }
});
