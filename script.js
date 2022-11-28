const wrapper = document.querySelector(".wrapper");
qrImg = wrapper.querySelector(".qrimage img");
qrInput = wrapper.querySelector(".form input");
function submitN() {
    let qrValue = qrInput.value;
    if(!qrValue) return;
    
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    wrapper.classList.add("active");

}

