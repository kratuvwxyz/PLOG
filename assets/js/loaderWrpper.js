if (!localStorage.getItem("hasLoaderRunBefore")) {
  localStorage.setItem("hasLoaderRunBefore", true);
  const loaderWrapper = document.createElement("div");
  loaderWrapper.id = "loader-wrapper";
  loaderWrapper.style.cssText = `
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #343a40;
      z-index: 9999999;
  `;

  // Add the loader content
  const loaderContent = document.createElement("object");
  loaderContent.data = "https://desaign.app/clients/cli/images/logo/mainlogo-rep-7sec.svg";
  loaderContent.type = "image/svg+xml";
  loaderContent.style.width = "80%";
  loaderWrapper.appendChild(loaderContent);

  // Append the loader to the body
  document.body.prepend(loaderWrapper);

  // Remove the loader after the window loads
  window.addEventListener("load", () => {
    setTimeout(() => {
      loaderWrapper.style.transition = "opacity 0.5s ease";
      loaderWrapper.style.opacity = "0";
      setTimeout(() => {
        loaderWrapper.remove();
      }, 500);
    }, 5000); // Delay for 5 seconds
  });
}
