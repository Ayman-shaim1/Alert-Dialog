class Dialog {
  static Show = ({
    icon,
    title,
    textContent,
    buttonYesColor,
    buttonYesText,
    buttonYesClasses,
    buttonNoColor,
    buttonNoText,
    buttonNoClasses,
    onYes,
    onNo,
  }) => {
    const overlay = document.createElement("overlay");
    const dialog = document.createElement("div");
    const dialogIconContainer = document.createElement("div");
    const dialogIconCircle = document.createElement("span");
    const dialogTitle = document.createElement("h3");
    const dialogTextContent = document.createElement("p");
    const dialogButtonsContainer = document.createElement("div");

    const dialogButtonYes = document.createElement("button");
    const dialogButtonNo = document.createElement("button");

    overlay.classList.add("overlay");

    dialog.classList.add("dialog");

    dialogIconContainer.classList.add("dialog-icon-container");

    dialogIconCircle.classList.add("dialog-icon-circle");
    if (icon) {
      dialogIconCircle.innerHTML = icon;
    } else {
      dialogIconCircle.innerHTML = `<i class="fa-solid fa-question"></i>`;
    }
    dialogTitle.classList.add("dialog-title");
    dialogTitle.innerText = title || "";

    dialogTextContent.classList.add("dialog-content");
    dialogTextContent.innerText = textContent || "";

    dialogButtonsContainer.classList.add("dialog-buttons-container");

    dialogButtonYes.innerText = buttonYesText || "yes";
    if (buttonYesColor) {
      dialogButtonYes.style.backgroundColor = buttonYesColor;
    }

    if (buttonYesClasses) {
      dialogButtonYes.classList = buttonYesClasses;
    }
    dialogButtonYes.classList.add("button");
    dialogButtonYes.addEventListener("click", () => {
      if (onYes) {
        onYes();
      }
      document.querySelector(".dialog").remove();
      document.querySelector(".overlay").remove();
    });

    dialogButtonNo.innerText = buttonNoText || "no";
    if (buttonNoColor) {
      dialogButtonNo.style.backgroundColor = buttonNoColor;
    }

    dialogButtonNo.classList.add("button");
    dialogButtonNo.classList.add("danger");

    if (buttonNoClasses) {
      dialogButtonNo.classList = buttonNoClasses;
    }

    dialogButtonNo.addEventListener("click", () => {
      if (onNo) {
        onNo();
      }
      document.querySelector(".dialog").remove();
      document.querySelector(".overlay").remove();
    });

    dialogIconContainer.appendChild(dialogIconCircle);
    dialogButtonsContainer.appendChild(dialogButtonYes);
    dialogButtonsContainer.appendChild(dialogButtonNo);

    dialog.appendChild(dialogIconContainer);
    dialog.appendChild(dialogIconContainer);
    dialog.appendChild(dialogTitle);
    dialog.appendChild(dialogTextContent);
    dialog.appendChild(dialogButtonsContainer);

    document.body.prepend(overlay);
    document.body.prepend(dialog);
  };
}
