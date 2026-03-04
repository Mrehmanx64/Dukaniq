gsap.registerPlugin(ScrollTrigger);
gsap.from("#navbar", {
  y: -60,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});
gsap.from(".hero-badge", {
  y: 30,
  opacity: 0,
  duration: 0.6,
  delay: 0.2,
});
gsap.from("h1", { y: 40, opacity: 0, duration: 0.7, delay: 0.35 });
gsap.from(".hero-sub", { y: 30, opacity: 0, duration: 0.6, delay: 0.5 });
gsap.from(".hero-btns", {
  y: 25,
  opacity: 0,
  duration: 0.6,
  delay: 0.65,
});
gsap.from(".hero-img", {
  y: 50,
  opacity: 0,
  duration: 0.9,
  delay: 0.8,
  ease: "power2.out",
});
gsap.from(".scroll-down", {
  y: 20,
  opacity: 0,
  duration: 0.7,
  delay: 1.2,
  ease: "power2.out",
});
gsap.utils.toArray(".card").forEach(function (c, i) {
  gsap.from(c, {
    scrollTrigger: { trigger: c, start: "top 88%" },
    y: 40,
    opacity: 0,
    duration: 0.55,
    delay: i * 0.08,
    ease: "power2.out",
  });
});
gsap.from(".showcase-text", {
  scrollTrigger: { trigger: ".showcase", start: "top 80%" },
  x: -50,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});
gsap.from(".showcase-img", {
  scrollTrigger: { trigger: ".showcase", start: "top 80%" },
  x: 50,
  opacity: 0,
  duration: 0.7,
  delay: 0.15,
  ease: "power2.out",
});
gsap.utils.toArray(".stat-num").forEach(function (el) {
  var target = +el.dataset.target,
    suffix = el.dataset.suffix || "";
  ScrollTrigger.create({
    trigger: el,
    start: "top 85%",
    onEnter: function () {
      gsap.to(
        { val: 0 },
        {
          val: target,
          duration: 1.5,
          ease: "power1.out",
          onUpdate: function () {
            el.textContent =
              Math.round(this.targets()[0].val).toLocaleString() + suffix;
          },
        },
      );
    },
  });
});
gsap.utils.toArray(".testimonial-card").forEach(function (c, i) {
  gsap.from(c, {
    scrollTrigger: { trigger: c, start: "top 88%" },
    y: 35,
    opacity: 0,
    duration: 0.55,
    delay: i * 0.1,
    ease: "power2.out",
  });
});
gsap.from(".cta-banner", {
  scrollTrigger: { trigger: ".cta-banner", start: "top 85%" },
  y: 40,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});
gsap.from(".contact-info", {
  scrollTrigger: { trigger: ".contact-section", start: "top 80%" },
  x: -40,
  opacity: 0,
  duration: 0.7,
  ease: "power2.out",
});
gsap.from(".contact-form-card", {
  scrollTrigger: { trigger: ".contact-section", start: "top 80%" },
  x: 40,
  opacity: 0,
  duration: 0.7,
  delay: 0.1,
  ease: "power2.out",
});
window.addEventListener("scroll", function () {
  document.getElementById("navbar").style.background =
    window.scrollY > 40 ? "rgba(10,10,15,0.95)" : "rgba(10,10,15,0.7)";
});

/* CHECKBOX */
var isChecked = false;
function toggleCheck() {
  isChecked = !isChecked;
  var cm = document.getElementById("checkmark");
  var lbl = document.getElementById("checkbox-label");
  document.getElementById("f-agree").checked = isChecked;
  if (isChecked) {
    cm.classList.add("checked");
    cm.innerHTML = "&#10003;";
    lbl.classList.add("is-checked");
    setError("err-agree", "");
  } else {
    cm.classList.remove("checked");
    cm.innerHTML = "";
    lbl.classList.remove("is-checked");
  }
}

/* CHAR COUNT */
document.getElementById("f-message").addEventListener("input", function () {
  var len = this.value.length;
  var el = document.getElementById("char-count");
  el.textContent = len + " / 500";
  el.className =
    "char-count" + (len > 500 ? " over" : len > 420 ? " warn" : "");
});

/* HELPERS */
function setError(id, msg) {
  document.getElementById(id).textContent = msg;
}
function markField(id, valid) {
  var el = document.getElementById(id);
  el.classList.toggle("valid", valid);
  el.classList.toggle("invalid", !valid);
}

/* VALIDATORS */
function validateName(show) {
  var val = document.getElementById("f-name").value.trim();
  if (!val) {
    if (show) {
      setError("err-name", "Full name is required.");
      markField("f-name", false);
    }
    return false;
  }
  if (val.length < 2) {
    if (show) {
      setError("err-name", "Name must be at least 2 characters.");
      markField("f-name", false);
    }
    return false;
  }
  setError("err-name", "");
  markField("f-name", true);
  return true;
}
function validateShop(show) {
  var val = document.getElementById("f-shop").value.trim();
  if (!val) {
    if (show) {
      setError("err-shop", "Supershop name is required.");
      markField("f-shop", false);
    }
    return false;
  }
  setError("err-shop", "");
  markField("f-shop", true);
  return true;
}
function validateEmail(show) {
  var val = document.getElementById("f-email").value.trim();
  var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!val) {
    if (show) {
      setError("err-email", "Email address is required.");
      markField("f-email", false);
    }
    return false;
  }
  if (!re.test(val)) {
    if (show) {
      setError("err-email", "Please enter a valid email address.");
      markField("f-email", false);
    }
    return false;
  }
  setError("err-email", "");
  markField("f-email", true);
  return true;
}
function validatePhone(show) {
  var val = document.getElementById("f-phone").value.trim().replace(/\s/g, "");
  var re = /^(\+8801|01)[3-9]\d{8}$/;
  if (!val) {
    if (show) {
      setError("err-phone", "Phone number is required.");
      markField("f-phone", false);
    }
    return false;
  }
  if (!re.test(val)) {
    if (show) {
      setError("err-phone", "Enter a valid BD number (e.g. 017XXXXXXXX).");
      markField("f-phone", false);
    }
    return false;
  }
  setError("err-phone", "");
  markField("f-phone", true);
  return true;
}
function validateInterest(show) {
  var val = document.getElementById("f-interest").value;
  if (!val) {
    if (show) {
      setError("err-interest", "Please select a topic.");
      markField("f-interest", false);
    }
    return false;
  }
  setError("err-interest", "");
  markField("f-interest", true);
  return true;
}
function validateMessage(show) {
  var val = document.getElementById("f-message").value.trim();
  if (!val) {
    if (show) {
      setError("err-message", "Message is required.");
      markField("f-message", false);
    }
    return false;
  }
  if (val.length < 10) {
    if (show) {
      setError("err-message", "Message must be at least 10 characters.");
      markField("f-message", false);
    }
    return false;
  }
  if (val.length > 500) {
    if (show) {
      setError("err-message", "Message cannot exceed 500 characters.");
      markField("f-message", false);
    }
    return false;
  }
  setError("err-message", "");
  markField("f-message", true);
  return true;
}
function validateAgree(show) {
  if (!isChecked) {
    if (show) {
      setError("err-agree", "You must agree to the terms to continue.");
    }
    return false;
  }
  setError("err-agree", "");
  return true;
}

/* LIVE VALIDATION */
function addLive(id, fn) {
  var el = document.getElementById(id);
  el.addEventListener("blur", function () {
    fn(true);
  });
  el.addEventListener("input", function () {
    if (el.classList.contains("invalid")) fn(true);
  });
}
addLive("f-name", validateName);
addLive("f-shop", validateShop);
addLive("f-email", validateEmail);
addLive("f-phone", validatePhone);
document.getElementById("f-interest").addEventListener("change", function () {
  validateInterest(true);
});
addLive("f-message", validateMessage);

/* SUBMIT */
function handleSubmit() {
  var ok = [
    validateName(true),
    validateShop(true),
    validateEmail(true),
    validatePhone(true),
    validateInterest(true),
    validateMessage(true),
    validateAgree(true),
  ].every(Boolean);
  if (!ok) {
    var card = document.querySelector(".contact-form-card");
    card.style.animation = "none";
    void card.offsetWidth;
    card.style.animation = "shake .4s ease";
    return;
  }
  var btn = document.getElementById("submit-btn");
  document.getElementById("btn-text").style.display = "none";
  document.getElementById("btn-loader").style.display = "flex";
  btn.disabled = true;
  setTimeout(function () {
    document.getElementById("form-wrap").style.display = "none";
    var s = document.getElementById("form-success");
    s.style.display = "block";
    gsap.from(s, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  }, 1600);
}
