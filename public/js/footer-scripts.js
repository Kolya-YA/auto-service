(() => {
  // ns-hugo-imp:/Users/kolya_ya/dev/Hugo-One/md-AnnaK/themes/mdcross/assets/js/modules/back-to-top.ts
  var btnBTT = document.querySelector(".back-to-top");
  if (btnBTT) {
    window.addEventListener("scroll", () => {
      const isBtnVisible = window.scrollY > window.innerHeight * 0.75;
      btnBTT.style.visibility = isBtnVisible ? "visible" : "hidden";
    });
    btnBTT.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  // ns-hugo-imp:/Users/kolya_ya/dev/Hugo-One/md-AnnaK/themes/mdcross/assets/js/modules/info-details.ts
  console.log("Info Details");
  var infoDetails = document.querySelectorAll(".info__details");
  infoDetails.forEach((iD) => {
    iD.addEventListener("click", (event) => {
      if (iD.hasAttribute("open")) {
        event.preventDefault();
        iD.classList.add("closing");
        iD.addEventListener("animationend", (event2) => {
          if (event2.animationName === "close") {
            iD.classList.remove("closing");
            iD.removeAttribute("open");
          }
        }, { once: true });
      }
    });
  });

  // ns-hugo-imp:/Users/kolya_ya/dev/Hugo-One/md-AnnaK/themes/mdcross/assets/js/modules/cv-dialog.ts
  var openCvBtns = document.querySelectorAll(".open-cv");
  var cvDialog = document.querySelector(".cv-dialog");
  var closeCvBtn = cvDialog.querySelector(".dialog-btn__close");
  openCvBtns?.forEach((oBtn) => {
    oBtn.addEventListener("click", () => {
      cvDialog.showModal();
      document.body.style.overflow = "hidden";
    });
  }, false);
  closeCvBtn?.addEventListener("click", () => {
    cvDialog.close();
  }, false);
  cvDialog?.addEventListener("click", ({ target }) => {
    if (target.nodeName === "DIALOG") {
      target.close("dismiss");
    }
  }, false);
  cvDialog?.addEventListener("close", () => {
    document.body.style.overflow = "auto";
  }, false);

  // ns-hugo-imp:/Users/kolya_ya/dev/Hugo-One/md-AnnaK/themes/mdcross/assets/js/modules/form-dialog.ts
  var openFormBtns = document.querySelectorAll(".open-form");
  var formDialog = document.querySelector(".form-dialog");
  var closeFormBtn = formDialog.querySelector(".dialog-btn__close");
  openFormBtns?.forEach((oBtn) => {
    oBtn.addEventListener("click", () => {
      formDialog.showModal();
      document.body.style.overflow = "hidden";
    }, false);
  });
  closeFormBtn?.addEventListener("click", () => {
    formDialog.close();
  }, false);
  formDialog?.addEventListener("click", ({ target }) => {
    if (target.nodeName === "DIALOG") {
      target.close("dismiss");
    }
  }, false);
  formDialog?.addEventListener("close", () => {
    document.body.style.overflow = "auto";
  }, false);
})();
