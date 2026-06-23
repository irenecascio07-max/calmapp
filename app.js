const frasi = [
"Ci sono io per te ❤️",
"Respira... sei al sicuro",
"Un passo alla volta, ok?",
"Meriti pace e calma oggi",
"Non sei sola, promesso",
"Chiudi gli occhi 3 secondi... ora va meglio?"
"Chiamami se stai male"
"Ti voglio bene"
"Sei molto forte"
"È solo una giornata no, tutto passa"
"focalizzati sulle cose belle e su chi ti vuole bene"
"Io sono sempre qui per te"
"Fiorirai"
];

document.getElementById("btn").addEventListener("click", () => {
const random = frasi[Math.floor(Math.random() * frasi.length)];
document.getElementById("testo").innerText = random;
});
