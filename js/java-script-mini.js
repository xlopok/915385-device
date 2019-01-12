var linkFeedback=document.querySelector(".feedback-link"),popupFeedback=document.querySelector(".modal-feedback"),closeFeedback=popupFeedback.querySelector(".modal-feedback .button-close"),formFeedback=popupFeedback.querySelector("form"),loginFeedback=popupFeedback.querySelector("[name=name]"),emailFeedback=popupFeedback.querySelector("[name=email"),textareaFeedback=popupFeedback.querySelector("[name=text-area]"),isStorageSupport=!0,storage="";try{storage=localStorage.getItem("loginFeedback")}catch(e){isStorageSupport=!1}linkFeedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.add("modal-feedback-open"),storage?(loginFeedback.value=storage,emailFeedback.focus()):loginFeedback.focus()}),closeFeedback.addEventListener("click",function(e){e.preventDefault(),popupFeedback.classList.remove("modal-feedback-open"),popupFeedback.classList.remove("modal-error")}),formFeedback.addEventListener("submit",function(e){loginFeedback.value&&emailFeedback.value&&textareaFeedback.value?isStorageSupport&&localStorage.setItem("loginFeedback",loginFeedback.value):(e.preventDefault(),popupFeedback.classList.remove("modal-error"),popupFeedback.offsetWidth=popupFeedback.offsetWidth,popupFeedback.classList.add("modal-error"))});var linkMap=document.querySelector(".contacts-image img"),popupMap=document.querySelector(".modal-map"),closeMap=document.querySelector(".modal-map .button-close");linkMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.add("modal-map-open"),closeMap.classList.add("button-z-index")}),closeMap.addEventListener("click",function(e){e.preventDefault(),popupMap.classList.remove("modal-map-open")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popupFeedback.classList.contains("modal-feedback-open")&&(e.preventDefault(),popupFeedback.classList.remove("modal-feedback-open"),popupFeedback.classList.remove("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&popupMap.classList.contains("modal-map-open")&&(e.preventDefault(),popupMap.classList.remove("modal-map-open"))});