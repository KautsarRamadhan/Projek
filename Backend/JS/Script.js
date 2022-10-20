function registrasi() {
    var cek = 0;
    var date = new Date();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var year = date.getFullYear();
    var output = month + "/" + day + "/" + year;
    var date = document.getElementById("Dbirth").value;
    if(Date.parse(date)>Date.parse(output)){
    cek =1;
    }
   
    var Username = document.getElementById("Username").value;
    var Password1 = document.getElementById("Password1").value
    var Password2 = document.getElementById("Password2").value
    if(cek == 1){
        alert("Anda tidak bisa memilih tanggal lebih dari hari ini")
    }else if(Password2!==Password1){
    alert("Your Password isnt same")
    }
    else{
        alert("Wellcome " +Username)
    }
    return false;
    }

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });