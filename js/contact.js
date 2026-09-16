document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apptForm");
  if (!form) return;
  const success = document.getElementById("apptSuccess");
  const submitBtn = document.getElementById("apptSubmitBtn");
  const dateField = form.querySelector("#date");

  // Don't let patients pick a date in the past.
  if (dateField) {
    const today = new Date().toISOString().split("T")[0];
    dateField.setAttribute("min", today);
  }

  function buildMessage(data) {
    return (
      `New appointment request — ${CLINIC.name}\n` +
      `Name: ${data.name}\n` +
      `Phone: ${data.phone}\n` +
      `Email: ${data.email || "-"}\n` +
      `Preferred Date: ${data.date || "-"}\n` +
      `Preferred Service: ${data.service || "-"}\n` +
      `Message: ${data.message || "-"}`
    );
  }

  let lastSubmitAt = 0;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Honeypot: real visitors never see or fill this field. If it has a
    // value, silently drop the submission — it's almost certainly a bot.
    if (form.hp_website && form.hp_website.value.trim() !== "") {
      return;
    }

    // Rely on the browser's own accessible validation UI (required, type,
    // pattern, maxlength) rather than duplicating it with custom markup —
    // it's keyboard- and screen-reader-friendly out of the box.
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // Basic guard against accidental rapid double-submits (e.g. double
    // click). This is a UX safeguard only, not a real anti-abuse measure.
    const now = Date.now();
    if (now - lastSubmitAt < 4000) return;
    lastSubmitAt = now;

    const data = {
      name: form.name.value.trim().slice(0, 100),
      phone: form.phone.value.trim().slice(0, 20),
      email: form.email.value.trim().slice(0, 120),
      date: form.date.value,
      service: form.service.value,
      message: form.message.value.trim().slice(0, 800),
    };

    const text = buildMessage(data);
    const waLink = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}`;
    const mailLink = `mailto:${CLINIC.email}?subject=${encodeURIComponent("Appointment Request — " + data.name)}&body=${encodeURIComponent(text)}`;

    document.getElementById("apptWaLink").href = waLink;
    document.getElementById("apptMailLink").href = mailLink;

    success.classList.add("show");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
    form.reset();

    // Briefly disable the submit button so it can't be mashed repeatedly.
    if (submitBtn) {
      submitBtn.disabled = true;
      setTimeout(() => { submitBtn.disabled = false; }, 4000);
    }
  });
});
