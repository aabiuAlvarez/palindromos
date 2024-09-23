function checkPalindrome() {
    const word = document.getElementById('wordInput').value;
    const normalizedWord = normalizeString(word);

    const reversedWord = normalizedWord.split('').reverse().join('');

    if (normalizedWord === reversedWord) {
        document.getElementById('result').innerText = `"${word}" es un palíndromo.`;
        document.getElementById('result').style.color = "green";
    } else {
        alert(`"${word}" no es un palíndromo.`);
        document.getElementById('result').innerText = "";
    }
}

function normalizeString(str) {
    // Convertir a minúsculas, eliminar tildes, espacios y signos de puntuación
    return str
        .toLowerCase()
        .normalize("NFD") // Descomponer caracteres con tildes
        .replace(/[\u0300-\u036f]/g, "") // Eliminar las tildes
        .replace(/[\s.,/#!$%^&*;:{}=\-_`~()¿?¡!"']/g, ""); // Eliminar espacios y signos de puntuación
}
