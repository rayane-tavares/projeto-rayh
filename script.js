const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Dentro do âmbito da administração de medicamentos, escolha a opção que indica corretamente a graduação mínima de volume para uma seringa de 3 mL, considerando as práticas padrão de medição e dosagem?",
        alternativas: [
             "0,1ml",
            "o,5ml"
        ]
    },
    {
        enunciado: "Foi prescrito: Soro Fisiológico 0,9% 260 ml, NaCl 19% 10 ml,KCl 10% 10 ml, glicose 50% 20 ml, que será administrada na vazão de 40 gt/min. Quanto tempo levará para terminar a infusão",
        alternativas: [
           "3 horas e 30 minutos",
            "2 horas e 30 minutos"
        ]
    },
    {
        enunciado: "Em uma prescrição, pede-se a administração de 50 ml de uma solução em um tempo de 35 min. Calcule o número de microgotas/min. necessárias para administrar essa solução no tempo prescrito, e assinale a alternativa correta.",
        alternativas: [
             "86 microgotas/min.",
            "84 microgotas/min."
        ]
    },
    {
        enunciado: "Quantas gotas por minuto, aproximadamente, precisarão ser programadas para que um paciente receba 1500 ml de soro fisiológico 0,9% em 24 horas?",
        alternativas: [
            "21 gotas por minuto",
            "5 gotas por minuto"
        ]
    },
    {
        enunciado: "A farmácia de uma determinada unidade de saúde possui Frasco-ampola de Cefalotina Sódica de 1g. Ao se diluir com um volume de 5ml de solvente, obtém-se uma solução total de 5ml. Após a diluição, qual é a concentração de Cefalotina Sódica que se terá por ml?",
        alternativas: [
           "50 mg",
            "200 mg"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();