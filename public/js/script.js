function togglePopup() {
    document.getElementById("popup-1").classList.toggle("active");
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 6; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    document.getElementById("text-area").innerText = "Hi. Your OTP is: " + OTP;
}




