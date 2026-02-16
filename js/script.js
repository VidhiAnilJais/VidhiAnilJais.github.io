document.addEventListener("DOMContentLoaded", () => {

  /* ---------- Smooth Scroll ---------- */
  document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  /* ---------- Dynamic Typing ---------- */
  const roles = ["Entrepreneur", "Designer", "Problem Solver", "Tech Enthusiast"];
  let i = 0, j = 0, deleting = false;
  const speed = 100;
  const textEl = document.querySelector(".dynamic-text");

  if (textEl) {
    (function typeLoop() {
      const word = roles[i];
      if (!deleting) {
        textEl.textContent = word.substring(0, j++);
        if (j > word.length) setTimeout(() => deleting = true, 1200);
      } else {
        textEl.textContent = word.substring(0, j--);
        if (j < 0) {
          deleting = false;
          i = (i + 1) % roles.length;
        }
      }
      setTimeout(typeLoop, deleting ? speed / 2 : speed);
    })();
  }

  /* ---------- Theme Toggle ---------- */
  const toggleBtn = document.getElementById("theme-toggle");

  function applyTheme(theme) {
    document.body.classList.toggle("dark", theme === "dark");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      const isDark = document.body.classList.contains("dark");
      applyTheme(isDark ? "light" : "dark");
    });
  }

  /* ---------- AOS ---------- */
  if (typeof AOS !== "undefined") {
    AOS.init({ once: true, duration: 800 });
  }

});






document.addEventListener("DOMContentLoaded", () => {

  function drawPie(id, data, colors) {
    const canvas = document.getElementById(id);
    if (!canvas || typeof Chart === "undefined") return;

    new Chart(canvas, {
      type: "pie",
      data: {
        labels: data.map(d => d.label),
        datasets: [{
          data: data.map(d => d.value),
          backgroundColor: colors
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { position: "bottom" } }
      }
    });
  }

  drawPie("techSkills", [
    { label: "Python", value: 90 },
    { label: "C", value: 80 },
    { label: "AI/ML", value: 75 },
    { label: "Web", value: 70 }
  ], ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"]);

  drawPie("toolsSkills", [
    { label: "Streamlit", value: 85 },
    { label: "VS Code", value: 90 },
    { label: "GitHub", value: 80 },
    { label: "Gemini API", value: 70 }
  ], ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"]);

  drawPie("softSkills", [
    { label: "Problem Solving", value: 90 },
    { label: "Creativity", value: 85 },
    { label: "Teamwork", value: 80 },
    { label: "Time Mgmt", value: 80 }
  ], ["#4CAF50", "#FF9800", "#2196F3", "#9C27B0"]);

});





    document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  if (!toggleBtn) {
    console.warn("Theme toggle button not found");
    return;
  }

  // Apply theme safely
  function applyTheme(theme) {
    document.body.classList.toggle("dark-mode", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      console.warn("LocalStorage blocked by browser");
    }
  }

  // Button click
  toggleBtn.addEventListener("click", () => {
    const isDark = document.body.classList.contains("dark-mode");
    const newTheme = isDark ? "light" : "dark";
    applyTheme(newTheme);
    console.log("✅ Dark toggled →", !isDark);
  });

  // On page load
  let savedTheme = "light";
  try {
    savedTheme = localStorage.getItem("theme") || "light";
  } catch (e) {
    console.warn("LocalStorage blocked by browser");
  }
  applyTheme(savedTheme);
});

/* AOS SAFE INIT */
if (typeof AOS !== "undefined") {
  AOS.init({
    once: true,
    duration: 800,
  });
}
 
const icon = document.getElementById("theme-icon");

function updateIcon() {
  if (!icon) return;
  icon.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
}
 





const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("nav-links").classList.remove("active");
  });
});



document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-toggle");
  const navList = document.querySelector("nav ul");

  if (!menuBtn || !navList) return;

  menuBtn.addEventListener("click", () => {
    navList.classList.toggle("mobile-open");
  });
}); 





























document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contactForm");

    if (!form) {
        console.log("Contact form not found.");
        return;
    }

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        formData.append("access_key", "c4f8e5f4-53bf-4677-bf85-d07eb9011afa");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                showSuccess();
                form.reset();
            } else {
                alert("Submission failed. Please try again.");
            }

        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong. Please try again.");
        }
    });

});

function showSuccess() {
    const overlay = document.getElementById("successOverlay");
    if (overlay) {
        overlay.style.display = "flex";

        setTimeout(() => {
            overlay.style.display = "none";
        }, 4000);
    }
}

function closeSuccess() {
    const overlay = document.getElementById("successOverlay");
    if (overlay) {
        overlay.style.display = "none";
    }
}

