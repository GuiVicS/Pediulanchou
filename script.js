// botão de home
document.addEventListener("DOMContentLoaded", function () {
    const menuBottom = document.querySelector(".d-flex.bg-cor-primaria.d-flex.justify-content-center.fixed-bottom.text-light.py-2.d-block.d-sm-none.border-top");

    if (menuBottom) {
      const homeButton = document.createElement("div");
      homeButton.className = "flex-fill text-center"; // ou "col text-center"

      homeButton.innerHTML = `
        <a href="/" class="text-light">
          <p class="h6 my-0"><span class="fa fa-home"></span></p>
          Home
        </a>
      `;

      menuBottom.insertBefore(homeButton, menuBottom.firstChild);
    }
  }); 