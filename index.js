
// ----------BÀI TÍNH TIỀN LƯƠNG------------
document.getElementById("btn-tienLuong").onclick = () => {
  let dayOfWork = document.getElementById("salary").value * 1;

  let salaryperday = document.getElementById("numOfWorkDay").value * 1;
  if (dayOfWork < 0 || salaryperday < 0) {
    alert("Bạn đã nhập số không hợp lệ!");
    return;
  }
  let total = dayOfWork * salaryperday;
  document.getElementById("tongTienLuong").innerHTML =
    "Tổng tiền lương của bạn là: " +
    total.toLocaleString("vi", { style: "currency", currency: "VND" }) +
    ".";
};

// ------------BÀI TÍNH GIÁ TRI TRUNG BÌNH-------------
document.getElementById("btn-giaTriTrungBinh").onclick = () => {
  let n1 = document.querySelectorAll('[id^="so"]');
  let sum = 0;
  for (i = 0; i < n1.length; i++) {
    sum += n1[i].value * 1;
    console.log(n1[i].value);
  }
  let result = sum / 5;
  document.getElementById("xuatGTTB").innerHTML =
    "Giá trị trung bình là: " + result + ".";
};

// ------------BÀI QUY ĐỔI ĐƠN VỊ TIỀN TỆ------------
document.getElementById("btn-quyDoi").onclick = () => {
  let sotien = document.getElementById("soTienUSD").value * 1;
  if (sotien < 0) {
    alert("Bạn hãy nhập số tiền lớn hơn 0!");
    return;
  }
  let VND_cash = sotien * 23500;
  document.getElementById("noiXuatTien").innerHTML =
    sotien +
    " USD được quy đổi sang tiền Việt Nam là: " +
    VND_cash.toLocaleString("vi", { style: "currency", currency: "VND" }) +
    ".";
};

// ------------BÀI TÍNH DIỆN TÍCH, CHU VI-------------
document.getElementById("btn-Cvi_Dtich").onclick = () => {
  let chieuRong = document.getElementById("chieuRong").value * 1;
    let chieuDai = document.getElementById("chieuDai").value * 1;
    if (chieuDai < 0 || chieuRong < 0) {
        alert("Kích thước bạn nhập không hợp lệ!")
        return;
    }
  let DienTich = chieuRong * chieuDai,
    ChuVi = (chieuDai + chieuRong) * 2;
  document.querySelector(".xuatketqua").innerHTML =
    "Diện tích là: " + DienTich + ", chu vi là: " + ChuVi + ".";
};

// ------------BÀI TÍNH TỔNG 2 KÝ SỐ ----------------
document.getElementById("btn-TongKySo").onclick = () => {

    let digit = document.getElementById("soUser").value;
    if (digit.length >= 3 && digit[0]!='-' || digit.length <=1) {
        alert("Bạn đã nhập số không hợp lệ (2 chữ số) !");
        return;
    }
    digit = digit * 1;
    console.log(digit);
    let second_digit = digit % 10;
    
    if (second_digit < 0) second_digit += 10;
    console.log(second_digit);
    digit /= 10;
    console.log(parseInt(digit));
    let result = second_digit + parseInt(digit);
    document.getElementById("noiXuatTong").innerHTML="Tổng hai ký số là: " + result +".";
};


// ----------- HÀM XỬ LÝ HÀNH VI CLICK CHỌN BÀI TẬP CỦA NGƯỜI DÙNG ------------
function openTab(evt, tabName) {
  
  let tabcontent = document.getElementsByClassName("tabcontent");
  for ( i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  let tablinks = document.getElementsByClassName("tablinks");
  for ( i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.classList.add("active");
}
