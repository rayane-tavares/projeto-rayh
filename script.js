const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como a matemática é usada para calcular doses de medicamentos em pacientes?",
        alternativas: [
            {
                texto: "Calcula doses corforme peso e idade",
                afirmacao: "Sim correto"
            },
            {
                texto: "Calcula a dieta ideal para o paciente.",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: " De que forma as fórmulas matemáticas ajudam no diagnóstico de doenças?",
        alternativas: [
            {
                texto: "Aumenta a duração dos exames.",
                afirmacao: "correto"
            },
            {
                texto: "Interpreta exames e sinais",
                afirmacao: "errado"
            }
        ]
    },
    {
        enunciado: "Como a estatística auxilia na medicina preventiva?",
        alternativas: [
            {
                texto: "Identifica risco e tendências.",
                afirmacao: "Certa"
            },
            {
                texto: "Elimina completamente o riscos de doenças.",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado: "Qual a importância dos algoritmos matemáticos nas máquinas de imagem médica, como tomografias?",
        alternativas: [
            {
                texto: "Processa imagens para diagnóticos.",
                afirmacao: "afirmação"
            },
            {
                texto: "Gera imagen sem necessidade de equipamento",
                afirmacao: "Errada"
            }
        ]
    },
    {
        enunciado:  "Como os cálculos matemáticos ajudam no monitoramento de sinais vitais em UTIs?",
        alternativas: [
            {
                texto: "Monitora e ajusta sinais vitai.",
                afirmacao: "Correta"
            },
            {
                texto: "Controla o humor do paciente.",
                afirmacao: "Errada"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length) {
        mostraResultado ();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Sabemos que a tecnologia teve um grande avanço principalmente na medicina como favorecido a obtenção de diagnósticos e a realização de procedimentos com maior segurança e precisão...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " Com o passar dos anos conseguimos diagnósticos mai rapidos sassim podendo judar muitas vidas...";
}

mostraPergunta()