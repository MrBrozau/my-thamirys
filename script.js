// LISTA DE FRASES EXPANDIDA (MAIS DE 15 FRASES)
const frasesMural = [
    "Thamirys, você é o 'com certeza' em um mundo de 'talvez'. 🌹",
    "Se beleza desse cadeia, você pegaria prisão perpétua! 😂🚔",
    "Minha meta é te fazer sorrir até você ficar banguela (e eu ainda vou te amar)! 🦷❤️",
    "Você é a única pessoa que eu não ignoro as notificações. Mesmo no meio da partida! 📱😍",
    "Te amo mais do que eu amo o meu videogame (e olha que você sabe o quanto eu sou viciado!) 🎮💖",
    "Você não é Google, mas tem tudo o que eu procuro em uma mulher. ✨",
    "A gente combina mais que pão de queijo com café quentinho! ☕🧀",
    "Seu sorriso é o meu 'Save Point' favorito na vida. 💾❤️",
    "Você é o cheat code que deixou minha vida no modo fácil e feliz. 🕹️✨",
    "Trocaria todos os meus consoles só pra ter mais 5 minutos de dengo seu. 🥰",
    "Você é a skin mais linda que o mundo já viu. 👗💎",
    "Minha vida antes de você era tipo lag de 999ms. Com você é tudo liso! 🚀",
    "Te amo no nível hard, sem direito a respawn porque você é única! 🏆❤️",
    "Você é o troféu de platina do meu coração. 🥇💍",
    "Seu abraço é o único lugar onde o mundo faz sentido. 🌍💕"
];

let muralIndex = 0;

// VERIFICAÇÃO DE ACESSO COM ANIMAÇÃO
function verificarAcesso() {
    const nome = document.getElementById('nome').value.trim().toLowerCase();
    const sobrenome = document.getElementById('sobrenome').value.trim().toLowerCase();
    const data = document.getElementById('data').value.trim();
    const erro = document.getElementById('erro');

    if (nome === "thamirys" && sobrenome === "nascimento" && data === "19/03/2011") {
        document.getElementById('musica').play().catch(() => {});
        avancarParaIntro();
    } else {
        erro.innerText = "❌ Dados incorretos! Tenta de novo, minha gata!";
        erro.classList.add('shake-animation');
        setTimeout(() => erro.classList.remove('shake-animation'), 500);
    }
}

// TRANSIÇÕES DE TELA
function avancarParaIntro() {
    changeScreen('login-screen', 'intro-text');
    typeWriter("Thamirys, você entrou no sistema do meu coração... Prepare-se para as verdades do seu Luiz! ✨", "frase-intro", () => {
        setTimeout(() => {
            changeScreen('intro-text', 'mural-screen');
            proximaFrase();
            startHeartRain();
        }, 2500);
    });
}

function proximaFrase() {
    const fraseEl = document.getElementById('frase-mural');
    fraseEl.style.opacity = '0';
    setTimeout(() => {
        typeWriter(frasesMural[muralIndex], "frase-mural");
        muralIndex = (muralIndex + 1) % frasesMural.length;
        fraseEl.style.opacity = '1';
    }, 300);
}

function irParaFinal() {
    changeScreen('mural-screen', 'final-screen');
}

// ENGINE DE DIGITAÇÃO (FIX DE ESPAÇOS)
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
            setTimeout(typing, 40);
        } else if (callback) {
            callback();
        }
    }
    typing();
}

// SISTEMA DE TROCA DE TELAS
function changeScreen(oldId, newId) {
    const oldS = document.getElementById(oldId);
    const newS = document.getElementById(newId);
    
    oldS.style.opacity = '0';
    oldS.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        oldS.classList.remove('active');
        oldS.style.display = 'none';
        
        if (newId === 'final-screen') {
            newS.style.display = 'block';
        } else {
            newS.style.display = 'flex';
        }
        
        setTimeout(() => {
            newS.classList.add('active');
            newS.style.opacity = '1';
            newS.style.transform = 'translateY(0)';
        }, 50);
    }, 600);
}

// EFEITO DE CHUVA DE CORAÇÕES
function startHeartRain() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.classList.add('heart-particle');
        heart.innerHTML = ["❤️", "💖", "✨", "🌸", "🎮"][Math.floor(Math.random() * 5)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
        heart.style.fontSize = (Math.random() * 20 + 15) + "px";
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }, 300);
}

// ... (Mais 150 linhas de funções de partículas e eventos mobile)