const frasesMural = [
    "Thamirys, você é o 'com certeza' em um mundo de 'talvez'. 🌹",
    "Se beleza desse cadeia, você pegaria prisão perpétua! 😂🚔",
    "Minha meta é te fazer sorrir até você ficar banguela (e eu ainda vou te amar)! 🦷❤️",
    "Você é a única pessoa que eu não ignoro as notificações. Mesmo no jogo! 📱😍",
    "Você é a única que ganha do meu videogame na disputa pela minha atenção! Te amo, gata! 🎮🔥❤️",
    "Você não é Google, mas tem tudo o que eu procuro. ✨",
    "A gente combina mais que pão de queijo com café! ☕🧀"
];

let muralIndex = 0;

function verificarAcesso() {
    const nome = document.getElementById('nome').value.trim();
    const sobrenome = document.getElementById('sobrenome').value.trim();
    const data = document.getElementById('data').value.trim();

    if (nome.toLowerCase() === "thamirys" && 
        sobrenome.toLowerCase() === "nascimento" && 
        data === "19/03/2011") {
        
        document.getElementById('musica').play().catch(() => console.log("Som ativado após interação"));
        showIntro();
    } else {
        document.getElementById('erro').innerText = "Errou! Tá querendo ver os segredos da Thamirys? Sai fora! 😂❤️";
    }
}

function showIntro() {
    changeScreen('login-screen', 'intro-text');
    // Texto de introdução escrito
    typeWriter("Thamirys, antes de você entrar, eu só queria dizer que você é a razão do meu sorriso todos os dias... ✨", "frase-intro", () => {
        setTimeout(() => {
            changeScreen('intro-text', 'mural-screen');
            proximaFrase();
            setInterval(criarCoracao, 300);
        }, 2000);
    });
}

function proximaFrase() {
    const texto = frasesMural[muralIndex];
    typeWriter(texto, "frase-mural");
    muralIndex = (muralIndex + 1) % frasesMural.length;
}

function irParaFinal() {
    changeScreen('mural-screen', 'final-screen');
}

// Lógica de digitar texto corrigida
function typeWriter(text, elementId, callback) {
    const el = document.getElementById(elementId);
    el.innerHTML = "";
    let i = 0;
    
    function typing() {
        if (i < text.length) {
            if (text.charAt(i) === " ") {
                el.innerHTML += "&nbsp;";
            } else {
                el.innerHTML += text.charAt(i);
            }
            i++;
            setTimeout(typing, 50);
        } else {
            if (callback) callback();
        }
    }
    typing();
}

function changeScreen(oldId, newId) {
    const oldScreen = document.getElementById(oldId);
    const newScreen = document.getElementById(newId);
    
    oldScreen.style.opacity = '0';
    setTimeout(() => {
        oldScreen.classList.remove('active');
        oldScreen.style.display = 'none';
        newScreen.style.display = 'flex';
        setTimeout(() => {
            newScreen.classList.add('active');
            newScreen.style.opacity = '1';
        }, 50);
    }, 600);
}

function criarCoracao() {
    const h = document.createElement('div');
    h.classList.add('heart');
    h.innerHTML = ["❤️", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.bottom = "-20px";
    h.style.fontSize = (Math.random() * 20 + 20) + "px";
    h.style.animationDuration = (Math.random() * 2 + 2) + "s";
    document.body.appendChild(h);
    setTimeout(() => h.remove(), 4000);
}