class Alert {
  static Show = ({
    type,
    title,
    textContent,
    buttonText,
    buttonColor,
    buttonClasses,
    icon,
  }) => {
    const icons = [
      {
        type: "danger",
        icon: `<i class="fa-solid fa-xmark"></i>`,
      },
      {
        type: "success",
        icon: `<i class="fa-solid fa-check"></i>`,
      },
      {
        type: "info",
        icon: `<i class="fa-solid fa-info"></i>`,
      },
      {
        type: "warning",
        icon: `<i class="fa-solid fa-exclamation"></i>`,
      },
    ];

    const overlay = document.createElement("overlay");
    const alert = document.createElement("div");
    const alertIconContainer = document.createElement("div");
    const alertIconCircle = document.createElement("span");
    const alertTitle = document.createElement("h3");
    const alertTextContent = document.createElement("p");
    const alertButtonOk = document.createElement("button");

    overlay.classList.add("overlay");

    alert.classList.add("alert");

    if (type) {
      alert.classList.add(type);
      alertIconContainer.classList.add("alert-icon-container");
      alertIconCircle.classList.add("alert-icon-circle");
      alertIconCircle.innerHTML = icons.find(
        (i) => String(i.type) === String(type.toLowerCase())
      ).icon;
      alertIconContainer.appendChild(alertIconCircle);
      alert.appendChild(alertIconContainer);
    }

    if (icon) {
      alertIconContainer.classList.add("alert-icon-container");
      alertIconCircle.classList.add("alert-icon-circle");
      alertIconCircle.innerHTML = icon;
      alertIconContainer.appendChild(alertIconCircle);
      alert.appendChild(alertIconContainer);
    }

    alertTitle.classList.add("alert-title");
    alertTitle.innerText = title || "";

    alertTextContent.classList.add("alert-content");
    alertTextContent.innerText = textContent || "";

    alertButtonOk.innerText = buttonText || "ok";
    if (buttonColor) alertButtonOk.style.backgroundColor = buttonColor;
    if (buttonClasses) {
      alertButtonOk.classList = buttonClasses;
    } else {
      if (type) {
        alertButtonOk.classList.add(type);
      }
    }
    alertButtonOk.classList.add("button");

    alertButtonOk.addEventListener("click", () => {
      document.querySelector(".alert").remove();
      document.querySelector(".overlay").remove();
    });

    alert.appendChild(alertTitle);
    alert.appendChild(alertTextContent);
    alert.appendChild(alertButtonOk);

    document.body.prepend(overlay);
    document.body.prepend(alert);
  };
}
