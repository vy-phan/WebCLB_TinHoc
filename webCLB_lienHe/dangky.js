(function () {
  // alert("hello");
  const fonts = ["cursive", "sans-serif", "serif", "monospace"];
  let captchaValue = "";
  function generateCaptcha() {
    let value = btoa(Math.random() * 1000000000);
    value = value.substring(0, 5 + Math.random() * 5);
    captchaValue = value;
    // alert(captchaValue);
  }

  function setCaptcha() {
    let html = captchaValue
      .split("")
      .map((char) => {
        const rotate = -20 + Math.trunc(Math.random() * 30);
        const font = Math.trunc(Math.random() * fonts.length);
        return `<span style="transform:rotate(${rotate}deg);
                font-family:${fonts[font]}
                "
                >${char}</span>`;
      })
      .join("");
    document.querySelector(".preview").innerHTML = html;
  }

  function initCaptcha() {
    const doc = document.querySelector(".captcha-refresh");
    if (doc) {
      doc.addEventListener("click", function () {
        //alert("hihi");
        generateCaptcha();
        setCaptcha();
      });
    }

    //alert("hihi");
    generateCaptcha();
    setCaptcha();
  }
  initCaptcha();

  document.querySelector("#login-btn").addEventListener("click",function(){
    let inputcaptchaValue = document.querySelector(".captcha #captcha-form").value;
    if(inputcaptchaValue === ""){
    alert("Mã Captcha không được để trống..!")
    }else if(inputcaptchaValue === captchaValue){
      alert("Đăng ký thành công..!");
    } else {
      alert("Mã Captcha sai. Vui lòng nhập lại..!");
    }
  });
})();
