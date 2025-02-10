function buyNow(watchName, price) {
    const phoneNumber = "2348168032686";  
    const message = `Hello, I'm interested in buying the ${watchName} . Is it available?`;
    const whatsappURL = `https://wa.me/2348168032686?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappURL;
}

function navigateTo(page) {
    window.location.href = page;
}
