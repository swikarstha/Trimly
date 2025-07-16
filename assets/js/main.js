const bookingData = {
  service: null,
  barber: null,
  package: null,
};

let currentStep = 1;

function selectCard(card, type) {
  const allCards = document.querySelectorAll(`.${type}-card`);
  allCards.forEach((c) => {
    c.style.backgroundColor = "#FFFFFF";
    c.style.color = "#111827";
    c.style.borderColor = "#E5E7EB";
    c.style.boxShadow = "none";
    c.style.transition = "all 0.3s ease";
    c.style.cursor = "pointer";
    c.onmouseover = () => {
      if (c.style.backgroundColor === "#FFFFFF") {
        c.style.borderColor = "#6C63FF";
        c.style.boxShadow = "0 4px 6px rgba(108, 99, 255, 0.1)";
      }
    };
    c.onmouseout = () => {
      if (c.style.backgroundColor === "#FFFFFF") {
        c.style.borderColor = "#E5E7EB";
        c.style.boxShadow = "none";
      }
    };
    c.querySelectorAll("h2, span, div, p, li").forEach((el) => {
      el.style.color =
        el.classList.contains("fa-star") || el.classList.contains("fa-crown")
          ? el.style.color
          : "#111827";
      if (el.classList.contains("fa-clock")) el.style.color = "#6B7280";
    });
  });

  card.style.backgroundColor = "#9893F4";
  card.style.color = "#FFFFFF";
  card.style.borderColor = "#6C63FF";
  card.style.boxShadow = "0 4px 6px rgba(108, 99, 255, 0.2)";
  card.style.transition = "all 0.3s ease";
  card.style.cursor = "pointer";
  card.onmouseover = null;
  card.onmouseout = null;
  card.querySelectorAll("h2, span, div, p, li").forEach((el) => {
    if (
      !el.classList.contains("fa-star") &&
      !el.classList.contains("fa-crown")
    ) {
      el.style.color = "#FFFFFF";
    }
  });

  if (type === "service") {
    bookingData.service = card.getAttribute("data-service");
    enableNextButton("next-btn-1");
  } else if (type === "barber") {
    bookingData.barber = card.getAttribute("data-barber");
    enableNextButton("next-btn-2");
  } else if (type === "package") {
    bookingData.package = card.getAttribute("data-package");
    enableNextButton("next-btn-3");
    enableNextButton("next-btn-4");
  }
}

function enableNextButton(id) {
  const btn = document.getElementById(id);
  if (btn) {
    btn.disabled = false;
    btn.style.backgroundColor = "#3B82F6";
    btn.style.color = "#FFFFFF";
    btn.style.opacity = "1";
    btn.style.cursor = "pointer";
    btn.style.transition = "all 0.3s ease";
    btn.onmouseover = () => (btn.style.backgroundColor = "#2563EB");
    btn.onmouseout = () => (btn.style.backgroundColor = "#3B82F6");
  }
}

function nextStep(step) {
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step + 1}`).style.display = "block";
  currentStep = step + 1;
}

function prevStep(step) {
  document.getElementById(`step${step}`).style.display = "none";
  document.getElementById(`step${step - 1}`).style.display = "block";
  currentStep = step - 1;
}

function initializeButtons() {
  const nextButtons = ["next-btn-1", "next-btn-2", "next-btn-3", "next-btn-4"];
  nextButtons.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.style.backgroundColor = "#E2E8F0";
      btn.style.opacity = "0.6";
      btn.style.cursor = "not-allowed";
      btn.style.transition = "all 0.3s ease";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".service-card").forEach((card) => {
    card.addEventListener("click", () => selectCard(card, "service"));
  });
  document.querySelectorAll(".barber-card").forEach((card) => {
    card.addEventListener("click", () => selectCard(card, "barber"));
  });
  document.querySelectorAll(".package-card").forEach((card) => {
    card.addEventListener("click", () => selectCard(card, "package"));
  });
  document
    .getElementById("next-btn-1")
    .addEventListener("click", () => nextStep(1));
  document
    .getElementById("next-btn-2")
    .addEventListener("click", () => nextStep(2));
  document
    .getElementById("next-btn-3")
    .addEventListener("click", () => nextStep(3));
  document
    .getElementById("next-btn-4")
    .addEventListener("click", () => nextStep(4));
  document.querySelectorAll("#step2 button").forEach((btn) => {
    if (btn.textContent === "Previous")
      btn.addEventListener("click", () => prevStep(2));
  });
  document.querySelectorAll("#step3 button").forEach((btn) => {
    if (btn.textContent === "Previous")
      btn.addEventListener("click", () => prevStep(3));
  });
  document.querySelectorAll("#step4 button").forEach((btn) => {
    if (btn.textContent === "Previous")
      btn.addEventListener("click", () => prevStep(4));
  });
  document.querySelectorAll("#step5 button").forEach((btn) => {
    if (btn.textContent === "Previous")
      btn.addEventListener("click", () => prevStep(5));
  });
  initializeButtons();
});
