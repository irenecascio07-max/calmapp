function saluta() {
alert("Ci sono per te ❤️");
}

if ('serviceWorker' in navigator) {
navigator.serviceWorker.register('sw.js');
}
