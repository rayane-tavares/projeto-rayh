const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Dentro do âmbito da administração de medicamentos, escolha a opção que indica corretamente a graduação mínima de volume para uma seringa de 3 mL, considerando as práticas padrão de medição e dosagem?",
        alternativas: [
            {
                texto: "0,1ml",
                afirmacao: "afirmação"
            },
            {
                texto: "0,5ml",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Foi prescrito: Soro Fisiológico 0,9% 260 ml, NaCl 19% 10 ml,KCl 10% 10 ml, glicose 50% 20 ml, que será administrada na vazão de 40 gt/min. Quanto tempo levará para terminar a infusão",
        alternativas: [
            {
                texto: "3 horas e 3o minutos",
                afirmacao: "afirmação"
            },
            {
                texto: "2 horas e 30minutos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Em uma prescrição, pede-se a administração de 50 ml de uma solução em um tempo de 35 min. Calcule o número de microgotas/min. necessárias para administrar essa solução no tempo prescrito, e assinale a alternativa correta.",
        alternativas: [
            {
                texto: "86 microgotas/min",
                afirmacao: "afirmação"
            },
            {
                texto: "84 microgotas/min",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "Quantas gotas por minuto, aproximadamente, precisarão ser programadas para que um paciente receba 1500 ml de soro fisiológico 0,9% em 24 horas?",
        alternativas: [
            {
                texto: "21 goras por minutos",
                afirmacao: "afirmação"
            },
            {
                texto: "5 gotas por minutos.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado:  "A farmácia de uma determinada unidade de saúde possui Frasco-ampola de Cefalotina Sódica de 1g. Ao se diluir com um volume de 5ml de solvente, obtém-se uma solução total de 5ml. Após a diluição, qual é a concentração de Cefalotina Sódica que se terá por ml?",
        alternativas: [
            {
                texto: "50mg",
                afirmacao: "afirmação"
            },
            {
                texto: "200mg",
                afirmacao: "afirmação"
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
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
    historiaFinal = afirmacoes;
    atual++;
    mostraPergunta();
}

mostraPergunta();