/*
Agora que já temos conhecimento básico para criarmos uma API REST,
vamos criar como exemplo uma API que retorna uma mensagem de 
motivação de acordo com o dia do mês.

Para iniciarmos o projeto é necessário que você instale o Express,
assim como vimos anteriormente neste curso.

Agora é hora de mexer no código. Primeiro, crie um arquivo chamado dados.js e insira o Código
*/ 

frases = [
    'A persistência é o caminho do êxito.',
    'A maior de todas as torres começa no solo.',
    'Siga os bons e aprenda com eles.',
    'Não importa o tamanho da montanha, ela não pode tapar o sol.',
    'Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.',
    'Sem o fogo do entusiasmo, não há o calor da vitória.',
    'Sorte é estar pronto quando a oportunidade vem.',
    'Faça pequenas coisas agora e maiores coisas lhe serão confiadas cada dia.',
    'O destino não é uma questão de sorte, é uma questão de escolha. Não é algo a se esperar, é algo a se conquistar.',
    'A sorte favorece a mente bem preparada.',
    'Deixe de lado as preocupações e seja feliz.',
    'O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.',
    'Muitas das grandes realizações do mundo foram feitas por homens cansados e desanimados que continuaram trabalhando.',
    'Ter sorte é ter a força para não se acomodar e lutar para que o fruto do seu trabalho tenha sucesso.',
    'Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.',
    'Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.',
    'O verdadeiro homem mede a sua força, quando se defronta com o obstáculo.',
    'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
    'A vida é para quem topa qualquer parada. Não para quem para em qualquer topada.',
    'Inspiração vem dos outros. Motivação vem de dentro de nós.',
    'A vida trará coisas boas se tiver paciência.',
    'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
    'Realize o obvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'Nós somos o que pensamos.',
    'O sucesso não ocorre por acaso.',
    'Talento é dom, é graça. E sucesso nada tem a ver com sorte, mas com determinação e trabalho.',
    'Boa sorte é o que acontece quando a oportunidade encontra o planejamento.',
    'A arte de vencer se aprende nas derrotas.',
    'Tenho paciência e penso: todo o mal traz consigo algum bem.',
    'O destino não é uma questão de sorte, é uma questão de escolha. Não é algo a se esperar, é algo a se conquistar.'
]

exports.frases = frases; 


// Agora, crie o arquivo chamado mensagemDoDia.js e insira o Código

let dados = require('./dados');

function retornarMensagemDoDia(dia) {
    return dados.frases[dia - 1];
}

exports.retornarMensagemDoDia = retornarMensagemDoDia; 


// E também crie o arquivo chamado index.js e insira o Código

const express = require('express');
const app = express();

let data = new Date();

let mensagemDoDia = require('./mensagemDoDia');

app.get('/', (req, res) => {
    let dia = data.getDate();
    let mensagemSelecionada = mensagemDoDia.retornarMensagemDoDia(dia);

    res.json({mensagem: mensagemSelecionada});
});

app.listen(8080, () => {
    console.log('Servidor node iniciado em: ' + data);
})


/*
Entendendo o código do exemplo
Para retornarmos a frase de acordo com o dia, precisamos seguir alguns passos:

Identificar o dia atual
Selecionar a frase pelo índice, que será o dia atual menos 1,
pois a primeira posição do array é 0.
*/