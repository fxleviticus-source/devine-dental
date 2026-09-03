document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("apptForm");
  if (!form) return;
  const success = document.getElementById("apptSuccess");

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

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
      name: form.name.value.trim(),
      phone: form.phone.value.trim(),
      email: form.email.value.trim(),
      date: form.date.value,
      service: form.service.value,
      message: form.message.value.trim(),
    };
    if (!data.name || !data.phone) return;

    const text = buildMessage(data);
    const waLink = `https://wa.me/${CLINIC.whatsappNumber}?text=${encodeURIComponent(text)}`;
    const mailLink = `mailto:${CLINIC.email}?subject=${encodeURIComponent("Appointment Request — " + data.name)}&body=${encodeURIComponent(text)}`;

    document.getElementById("apptWaLink").href = waLink;
    document.getElementById("apptMailLink").href = mailLink;

    success.classList.add("show");
    success.scrollIntoView({ behavior: "smooth", block: "center" });
    form.reset();
  });
});
