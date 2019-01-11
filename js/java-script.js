


  var linkFeedback = document.querySelector(".feedback-link");
  var popupFeedback = document.querySelector(".modal-feedback");
  var closeFeedback =popupFeedback.querySelector(".modal-feedback .button-close");
  var formFeedback = popupFeedback.querySelector("form");

  var loginFeedback = popupFeedback.querySelector("[name=name]");
  var emailFeedback = popupFeedback.querySelector("[name=email");
  var textareaFeedback = popupFeedback.querySelector("[name=text-area]");

  var isStorageSupport = true;

  var storage = "";


  try {
    storage = localStorage.getItem("loginFeedback");
  } catch (err) {
    isStorageSupport = false;
  }

  linkFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-feedback-open");
    

    if (storage) {
      loginFeedback.value = storage;
      emailFeedback.focus();
    } else {
      loginFeedback.focus();

    }
  });

  closeFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-feedback-open");
    popupFeedback.classList.remove("modal-error");
  });

  formFeedback.addEventListener("submit", function (evt) {
    if (!loginFeedback.value || !emailFeedback.value || !textareaFeedback.value) {
      evt.preventDefault();
      popupFeedback.classList.remove("modal-error");
      popupFeedback.offsetWidth = popupFeedback.offsetWidth;
      popupFeedback.classList.add("modal-error");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("loginFeedback", loginFeedback.value); 
  }
    }
  });


  var linkMap = document.querySelector(".contacts-image img");
  var popupMap = document.querySelector(".modal-map");
  var closeMap = document.querySelector(".modal-map .button-close");

  linkMap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("modal-map-open")
  });

  closeMap.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupMap.classList.remove("modal-map-open")
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains("modal-feedback-open")) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-feedback-open");
        popupFeedback.classList.remove("modal-error");
      }
    }
  });


   window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popupMap.classList.contains("modal-map-open")) {
        evt.preventDefault();
        
        popupMap.classList.remove("modal-map-open");
      }
    }
  });


