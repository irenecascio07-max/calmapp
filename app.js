[
"Ci sono io per te ❤️",
"Respira... sei al sicuro",
"Un passo alla volta, ok?",
"Meriti pace e calma oggi",
"Non sei sola, promesso",
"Chiudi gli occhi 3 secondi... ora va meglio?"
];

document.getElementById("btn").addEventListener("click", () => {
const random = frasi[Math.floor(Math.random() * frasi.length)];
document.getElementById("testo").innerText = random;
});
