function toggleService(element) {
    const description = element.nextElementSibling;
    const plusSign = element.querySelector('.plus-sign');
    
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "flex";
        plusSign.textContent = "-";
    } else {
        description.style.display = "none";
        plusSign.textContent = "+";
    }
}

function downloadFile() {
    window.open('assets/Mihika Dakappagari_Resume.pdf', '_blank');
}