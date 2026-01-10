const menuToggle = document.getElementById("menu-toggle");

const mobileMenuLinks = document.querySelectorAll(
  '#menu-mobile-links a[href^="#"]'
);

mobileMenuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle) {
      menuToggle.checked = false;
    }
  });
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const items = document.querySelectorAll(".item");
const dots = document.querySelectorAll(".dot");
const numberIndicator = document.querySelector(".numbers");
const list = document.querySelector(".list");

let active = 0;
const total = items.length;
let timer;

function update(direction) {
  document.querySelector(".item.active").classList.remove("active");
  document.querySelector(".dot.active").classList.remove("active");

  if (direction > 0) {
    active = active + 1;

    if (active == total) {
      active = 0;
    }
  } else if (direction < 0) {
    active = active - 1;

    if (active < 0) {
      active = total - 1;
    }
  }

  items[active].classList.add("active");
  dots[active].classList.add("active");

  numberIndicator.textContent = String(active + 1).padStart(2, "0");
}

clearInterval(timer);
timer = setInterval(() => {
  update(1);
}, 5000);

prevButton.addEventListener("click", () => {
  update(-1);
});

nextButton.addEventListener("click", () => {
  update(1);
});

// Escrever mensagem automática no WhatsApp

// Consulta Online
function whatsAppConsultaOnline() {
  const mensagem = `Olá! Tenho interesse na Consulta Online.
Busco praticidade e gostaria de saber como funciona o atendimento por videochamada, o plano alimentar via app e o acompanhamento. Pode me passar mais informações?`;
  const url = `https://wa.me/553791993867?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Acompanhamento Premium
function whatsAppAcompanhamentoPremium() {
  const mensagem = `Olá! Tenho interesse no Acompanhamento Premium.
Gostaria de um suporte mais completo, com consultas regulares, ajustes no cardápio e acompanhamento pelo WhatsApp. Pode me explicar como funciona e valores?`;
  const url = `https://wa.me/553791993867?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Carmo clinica / MG
function whatsAppCarmoClinica() {
  const mensagem = `Olá! Tenho interesse no atendimento presencial na Carmo Clínica, em Carmo do Cajuru – MG.
Gostaria de agendar um horário e saber mais sobre a avaliação e o acompanhamento oferecido. Pode me ajudar, por favor?`;
  const url = `https://wa.me/553791993867?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Amanda Pazzolini - Mateus Leme / MG
function whatsAppMateusLeme() {
  const mensagem = `Olá! Tenho interesse no atendimento presencial no Espaço Ananda Pozzolini, em Mateus Leme – MG.
Gostaria de agendar um horário e receber mais informações sobre a consulta presencial. Pode me passar os detalhes, por favor?`;
  const url = `https://wa.me/553791993867?text=${encodeURIComponent(mensagem)}`;
  window.open(url, "_blank");
}

// Botão voltar ao topo
const btnTopo = document.getElementById("btnTopo");

// Mostrar botão ao rolar a página
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    btnTopo.style.display = "block";
  } else {
    btnTopo.style.display = "none";
  }
});

// Voltar ao topo ao clicar
btnTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
