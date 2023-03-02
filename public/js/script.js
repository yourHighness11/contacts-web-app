function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.getElementById("text-area").innerText = "Hi. Your OTP is: " + OTP;
}

window.alert("This service is only for trial..user can only send sms to Sarvesh Kirodiwal(1st in the list)")




