function checkCode() {
  var code = document.getElementById("code").value;
  if (code == "DKTHAMGIA") { // Mã mặc định
    alert("Đăng ký thành công");// Nếu mã khớp thì hiện alert "Đăng ký thành công"
    window.location.href = "/duan1-master/Giaodien/index.html";// Redirect den toi trang index.html
    window.open("", "_self");// Sau khi " Đăng kí thành công" quay trở lại trang index.html trong tab hiện tại
  } else {
    alert("Mã sai");// Nếu mã không hợp lệ thì hiện alert "Mã sai"
  }
}

