// =====================================================
// BARBER DASHBOARD – Funções específicas do painel do barbeiro
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
    inicializarDashboard();
});

// =====================================================
// Função principal
// =====================================================
function inicializarDashboard() {
    ativarBotaoAtualizar();
    ativarModalBuscaCliente();
    iniciarRelogioTempoReal();
}

// =====================================================
// 1. Botão de atualizar ("refresh")
// =====================================================
function ativarBotaoAtualizar() {
    const refreshButtonIcon = document.querySelector(".fa-sync-alt");
    if (!refreshButtonIcon) return;

    const refreshButton = refreshButtonIcon.parentElement;

    refreshButton.addEventListener("click", () => {
        refreshButton.classList.add("animate-spin");

        setTimeout(() => {
            refreshButton.classList.remove("animate-spin");
        }, 1000);
    });
}

// =====================================================
// 2. Modal de busca de cliente
// =====================================================
function ativarModalBuscaCliente() {
    const modal = document.getElementById("quickActionModal");
    if (!modal) return;

    const searchButtons = document.querySelectorAll(".btn-secondary");

    const btnBuscar = Array.from(searchButtons).find(btn =>
        btn.innerText.includes("Buscar Cliente")
    );

    if (btnBuscar) {
        btnBuscar.addEventListener("click", () => {
            modal.classList.remove("hidden");
            modal.classList.add("flex");
        });
    }

    modal.addEventListener("click", e => {
        const isBackground = e.target === modal;
        const isCloseIcon = e.target.closest(".fa-times");

        if (isBackground || isCloseIcon) {
            modal.classList.add("hidden");
            modal.classList.remove("flex");
        }
    });
}

// =====================================================
// 3. Relógio Atualizando em Tempo Real
// =====================================================
function iniciarRelogioTempoReal() {
    const timeIndicator = document.querySelector(".text-primary.font-medium span");

    function atualizarHora() {
        if (!timeIndicator) return;

        const now = new Date();
        const h = now.getHours().toString().padStart(2, "0");
        const m = now.getMinutes().toString().padStart(2, "0");

        timeIndicator.textContent = `Agora - ${h}:${m}`;
    }

    atualizarHora();
    setInterval(atualizarHora, 60000);
}
