const perguntasBase = [
    { pergunta: "A LINGUAGEM, ENQUANTO PRÁTICA SOCIAL, PODE SER COMPREENDIDA COMO:", opcoes: { A: "UM CONJUNTO DE REGRAS FIXAS", B: "UM MEIO DE INTERAÇÃO E CONSTRUÇÃO DE SENTIDOS", C: "APENAS FORMA DE ESCRITA", D: "UM CÓDIGO SEM FUNÇÃO SOCIAL" }, correta: "B" },
    { pergunta: "A INVISIBILIDADE SOCIAL DAS MULHERES GARIS ESTÁ RELACIONADA PRINCIPALMENTE:", opcoes: { A: "À FALTA DE TRABALHO", B: "À AUSÊNCIA DE RECONHECIMENTO SOCIAL", C: "AO EXCESSO DE VALORIZAÇÃO", D: "À POUCA PRESENÇA NAS CIDADES" }, correta: "B" },
    { pergunta: "QUANDO A LINGUAGEM É USADA PARA DAR VOZ A GRUPOS SOCIAIS, ELA ATUA COMO:", opcoes: { A: "ELEMENTO DE EXCLUSÃO", B: "FERRAMENTA DE TRANSFORMAÇÃO SOCIAL", C: "OBSTÁCULO À COMUNICAÇÃO", D: "FORMA DE PADRONIZAÇÃO" }, correta: "B" },
    { pergunta: "A COLETIVIDADE PODE SER FORTALECIDA QUANDO:", opcoes: { A: "HÁ VALORIZAÇÃO DAS DIFERENÇAS", B: "PREDOMINA O INDIVIDUALISMO", C: "NÃO EXISTE DIÁLOGO", D: "HÁ EXCLUSÃO SOCIAL" }, correta: "A" },
    { pergunta: "O USO DE NARRATIVAS ORAIS NO PROJETO CONTRIBUI PARA:", opcoes: { A: "ELIMINAR MEMÓRIAS", B: "PRESERVAR HISTÓRIAS DE VIDA", C: "CRIAR INFORMAÇÕES FALSAS", D: "SUBSTITUIR A ESCRITA" }, correta: "B" },
    { pergunta: "A LINGUAGEM NÃO VERBAL ESTÁ PRESENTE EM:", opcoes: { A: "APENAS TEXTOS ESCRITOS", B: "DESENHOS E FOTOGRAFIAS", C: "SOMENTE DISCURSOS", D: "PROVAS ESCOLARES" }, correta: "B" },
    { pergunta: "A VALORIZAÇÃO DAS MULHERES GARIS CONTRIBUI PARA:", opcoes: { A: "AUMENTAR DESIGUALDADES", B: "PROMOVER CIDADANIA", C: "REDUZIR O DIÁLOGO", D: "CRIAR ISOLAMENTO SOCIAL" }, correta: "B" },
    { pergunta: "A PRODUÇÃO DE DOCUMENTÁRIOS NO PROJETO TEM COMO FUNÇÃO PRINCIPAL:", opcoes: { A: "ENTRETER APENAS", B: "REGISTRAR E DAR VISIBILIDADE", C: "SUBSTITUIR TEXTOS", D: "EVITAR REFLEXÃO" }, correta: "B" },
    { pergunta: "A INVISIBILIZAÇÃO DE UM GRUPO SOCIAL PODE GERAR:", opcoes: { A: "MAIOR RECONHECIMENTO", B: "DESIGUALDADE SOCIAL", C: "INCLUSÃO IMEDIATA", D: "PARTICIPAÇÃO ATIVA" }, correta: "B" },
    { pergunta: "A LINGUAGEM MISTA CARACTERIZA-SE POR:", opcoes: { A: "USO APENAS DE IMAGENS", B: "USO APENAS DE PALAVRAS", C: "COMBINAÇÃO DE LINGUAGENS", D: "AUSÊNCIA DE COMUNICAÇÃO" }, correta: "C" },
    { pergunta: "A ESCUTA ATIVA, NO CONTEXTO DO PROJETO, REPRESENTA:", opcoes: { A: "DESINTERESSE", B: "RESPEITO ÀS EXPERIÊNCIAS DO OUTRO", C: "FALTA DE ATENÇÃO", D: "JULGAMENTO IMEDIATO" }, correta: "B" },
    { pergunta: "A CONSTRUÇÃO DE UMA SOCIEDADE DEMOCRÁTICA EXIGE:", opcoes: { A: "SILENCIAMENTO DE VOZES", B: "PARTICIPAÇÃO E RESPEITO", C: "EXCLUSÃO SOCIAL", D: "DESIGUALDADE" }, correta: "B" },
    { pergunta: "OS FANZINES PRODUZIDOS PELOS ALUNOS SÃO EXEMPLOS DE:", opcoes: { A: "LINGUAGEM CIENTÍFICA FORMAL", B: "EXPRESSÃO CULTURAL E CRÍTICA", C: "COMUNICAÇÃO LIMITADA", D: "TEXTO EXCLUSIVAMENTE ACADÊMICO" }, correta: "B" },
    { pergunta: "A INVISIBILIDADE DAS MULHERES GARIS PODE SER COMBATIDA POR MEIO:", opcoes: { A: "DO SILÊNCIO", B: "DA PRODUÇÃO DE NARRATIVAS", C: "DA EXCLUSÃO", D: "DA OMISSÃO" }, correta: "B" },
    { pergunta: "A FUNÇÃO SOCIAL DA LINGUAGEM É:", opcoes: { A: "APENAS TRANSMITIR REGRAS", B: "CONSTRUIR SIGNIFICADOS NA SOCIEDADE", C: "ISOLAR INDIVÍDUOS", D: "IMPEDIR COMUNICAÇÃO" }, correta: "B" },
    { pergunta: "A ARTE NO PROJETO ATUA COMO:", opcoes: { A: "ELEMENTO DECORATIVO", B: "FORMA DE EXPRESSÃO E REFLEXÃO", C: "ATIVIDADE SEM SENTIDO", D: "CONTEÚDO SECUNDÁRIO" }, correta: "B" },
    { pergunta: "A COLETIVIDADE SE OPÕE DIRETAMENTE AO:", opcoes: { A: "RESPEITO", B: "INDIVIDUALISMO", C: "DIÁLOGO", D: "COOPERAÇÃO" }, correta: "B" },
    { pergunta: "AO TRANSFORMAR HISTÓRIAS EM CONHECIMENTO, O PROJETO:", opcoes: { A: "IGNORA A REALIDADE", B: "VALORIZA SABERES SOCIAIS", C: "CRIA DESIGUALDADES", D: "ELIMINA MEMÓRIAS" }, correta: "B" },
    { pergunta: "A LINGUAGEM AUDIOVISUAL COMBINA:", opcoes: { A: "SOM E IMAGEM", B: "APENAS TEXTO", C: "APENAS FALA", D: "APENAS ESCRITA" }, correta: "A" },
    { pergunta: "O RECONHECIMENTO DAS MULHERES GARIS CONTRIBUI PARA:", opcoes: { A: "INVISIBILIDADE", B: "JUSTIÇA SOCIAL", C: "DESIGUALDADE", D: "PRECONCEITO" }, correta: "B" },
    { pergunta: "A AUSÊNCIA DE VISIBILIDADE SOCIAL PODE AFETAR:", opcoes: { A: "APENAS O INDIVÍDUO", B: "A CONSTRUÇÃO DA MEMÓRIA COLETIVA", C: "APENAS O GOVERNO", D: "NENHUMA ESTRUTURA SOCIAL" }, correta: "B" },
    { pergunta: "A PRODUÇÃO TEXTUAL DOS ALUNOS PERMITE:", opcoes: { A: "REPETIÇÃO DE IDEIAS", B: "CONSTRUÇÃO DE PENSAMENTO CRÍTICO", C: "AUSÊNCIA DE REFLEXÃO", D: "DESINTERESSE SOCIAL" }, correta: "B" },
    { pergunta: "A CONVIVÊNCIA DEMOCRÁTICA ESTÁ DIRETAMENTE LIGADA:", opcoes: { A: "AO CONFLITO CONSTANTE", B: "AO RESPEITO ÀS DIFERENÇAS", C: "À EXCLUSÃO", D: "AO SILÊNCIO SOCIAL" }, correta: "B" },
    { pergunta: "A LINGUAGEM PODE CONTRIBUIR PARA:", opcoes: { A: "MANTER PRECONCEITOS", B: "TRANSFORMAR REALIDADES", C: "IMPEDIR MUDANÇAS", D: "EVITAR DIÁLOGO" }, correta: "B" },
    { pergunta: "HISTÓRIAS EM QUADRINHOS, NO PROJETO, SERVEM PARA:", opcoes: { A: "SIMPLIFICAR SEM SENTIDO", B: "COMUNICAR DE FORMA ACESSÍVEL", C: "EVITAR LEITURA", D: "EXCLUIR INFORMAÇÕES" }, correta: "B" },
    { pergunta: "A VALORIZAÇÃO DE PROFISSÕES ESSENCIAIS FORTALECE:", opcoes: { A: "DESIGUALDADE", B: "COLETIVIDADE", C: "INDIVIDUALISMO", D: "EXCLUSÃO" }, correta: "B" },
    { pergunta: "A LINGUAGEM COMO PRÁTICA SOCIAL SIGNIFICA:", opcoes: { A: "USO ISOLADO", B: "USO EM INTERAÇÃO", C: "USO TÉCNICO APENAS", D: "USO SEM CONTEXTO" }, correta: "B" },
    { pergunta: "A INVISIBILIDADE SOCIAL ESTÁ LIGADA À:", opcoes: { A: "FALTA DE RECONHECIMENTO", B: "EXCESSO DE VISIBILIDADE", C: "PARTICIPAÇÃO ATIVA", D: "INCLUSÃO SOCIAL" }, correta: "A" },
    { pergunta: "O PROJETO PROMOVE CIDADANIA AO:", opcoes: { A: "IGNORAR HISTÓRIAS", B: "DAR VISIBILIDADE A GRUPOS SOCIAIS", C: "EXCLUIR PARTICIPANTES", D: "LIMITAR A COMUNICAÇÃO" }, correta: "B" },
    { pergunta: "A PRINCIPAL CONTRIBUIÇÃO DO PROJETO É:", opcoes: { A: "PRODUZIR TEXTOS APENAS", B: "VALORIZAR VIDAS E HISTÓRIAS", C: "CRIAR CONTEÚDOS TÉCNICOS", D: "SUBSTITUIR A ESCOLA" }, correta: "B" }
];

// 🔥 FUNÇÃO QUE EMBARALHA OBJETO
function embaralharOpcoes(opcoes, correta) {
    const entradas = Object.entries(opcoes);

    for (let i = entradas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [entradas[i], entradas[j]] = [entradas[j], entradas[i]];
    }

    const novas = {};
    const letras = ["A", "B", "C", "D"];
    let novaCorreta = "";

    entradas.forEach(([_, valor], index) => {
        const letra = letras[index];
        novas[letra] = valor;

        if (valor === opcoes[correta]) {
            novaCorreta = letra;
        }
    });

    return { opcoes: novas, correta: novaCorreta };
}

// 🔥 GERA PERGUNTAS FINAL EMBARALHADAS
const perguntas = perguntasBase.map(q => {
    const resultado = embaralharOpcoes(q.opcoes, q.correta);
    return {
        pergunta: q.pergunta,
        opcoes: resultado.opcoes,
        correta: resultado.correta
    };
});

let atual = 0;
let pontos = 0;
const base = "assets/";

// Elementos DOM
const telaInicial = document.getElementById("tela-inicial");
const jogoArea = document.getElementById("jogo");
const startBtn = document.getElementById("startBtn");
const perguntaEl = document.getElementById("pergunta");
const opcoesEl = document.getElementById("opcoes");
const infoEl = document.getElementById("info");
const nextBtn = document.getElementById("nextBtn");
const personagem = document.getElementById("personagem");
const resultadoArea = document.getElementById("resultado");

// Iniciar Jogo
startBtn.onclick = () => {
    telaInicial.style.display = "none";
    jogoArea.style.display = "block";
    carregarPergunta();
};

function carregarPergunta() {
    let q = perguntas[atual];
    perguntaEl.textContent = q.pergunta;
    opcoesEl.innerHTML = "";
    infoEl.textContent = `Questão ${atual + 1} de ${perguntas.length}`;
    personagem.src = base + "neutro.jpg";
    nextBtn.style.display = "none";

    for (let letra in q.opcoes) {
        let btn = document.createElement("button");
        btn.textContent = `${letra}) ${q.opcoes[letra]}`;
        btn.onclick = () => responder(btn, letra);
        opcoesEl.appendChild(btn);
    }
}

function responder(btn, escolha) {
    let correta = perguntas[atual].correta;
    let botoes = document.querySelectorAll(".opcoes button");
    botoes.forEach(b => b.disabled = true);

    if (escolha === correta) {
        btn.classList.add("correta");
        personagem.src = base + "feliz.jpg";
        pontos++;
    } else {
        btn.classList.add("errada");
        personagem.src = base + "triste.jpg";
        botoes.forEach(b => {
            if (b.textContent.startsWith(correta)) b.classList.add("correta");
        });
    }
    nextBtn.style.display = "inline-block";
}

nextBtn.onclick = () => {
    atual++;
    if (atual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
};

function mostrarResultado() {

    document.getElementById("quiz").style.display = "none";
    resultadoArea.style.display = "block";

    let titulo = "";
    let emoji = "";

    if (pontos >= 25) {
        titulo = "🏆 Defensor da Cidadania";
        emoji = "🏆";
    } else if (pontos >= 15) {
        titulo = "🌟 Agente da Inclusão";
        emoji = "🌟";
    } else {
        titulo = "📚 Aprendiz Social";
        emoji = "📚";
    }

    let mensagem = pontos >= 25
        ? "Excelente desempenho! Você demonstrou grande compreensão sobre cidadania, linguagem e inclusão social."
        : pontos >= 15
            ? "Bom trabalho! Você compreendeu boa parte dos temas apresentados."
            : "Continue aprendendo sobre linguagem, coletividade e participação social.";

    resultadoArea.innerHTML = `
        <div class="resultado-card">

            <div class="resultado-emoji">${emoji}</div>

            <h2>${titulo}</h2>

            <div class="placar">
                ${pontos}<span>/${perguntas.length}</span>
            </div>

            <p>${mensagem}</p>

            <button id="restartBtn">
                🔄 Jogar Novamente
            </button>

        </div>
    `;

    document.getElementById("restartBtn").onclick = () => {
        location.reload();
    };
}