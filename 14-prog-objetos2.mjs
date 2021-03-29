/*
    Uma classe (class) é uma estrutura que permite controlar a criação de 
    objetos de acordo com seus requisitos de utilização. 

    Uma classe pode ser comparada a uma forma de bolo. Se uma forma de bolo
    é redonda, com um furo no meio, não importam os ingredientes que serão
    utilizados na receita, o bolo (ou o pudim, ou o quindim) sairão no formato
    determinado pela forma.
*/

// Por convenção, nomes de classe iniciam com Letra Maiúscula em JavaScript
class FormaGeometrica {

    // Declaração de atributos privados
    #base
    #altura
    #tipo

    // Quando uma função está dentro de uma classe, ela é denominada MÉTODO.
    // constructor() é um método especial que é chamado toda vez que se tenta
    // criar um objeto a partir da classe. Nele, é possível fazer as validações
    // que permitirão ou não a existência de um objeto.
    // O processo de criação de um objeto pode ser abortado se o constructor()
    // gerar um erro do tipo Error.
    constructor(base, altura, tipo) {
        // base, altura e tipo são os PARÂMETROS do construtor
        
        // base deve ser numérica e maior que zero
        if(isNaN(base) || base <= 0)
            throw new Error('A base deve ser numérica e maior que zero.')

        // altura deve ser numérica e maior que zero
        if(isNaN(altura) || altura <= 0)
            throw new Error('A altura deve ser numérica e maior que zero.')

        // tipo deve ser Q, T ou E
        // if(tipo !== 'Q' || tipo !== 'T' || tipo !== 'E') {
        if(! ['Q', 'T', 'E'].includes(tipo)) {
            throw new Error('O tipo deve ser Q, T ou E.')
        }

        // Se chegamos até aqui, as informações passadas estão corretas e podemos
        // continuar com a criação do objeto
        // A criação é concluída com o armazenamento dos parâmetros do construtor
        // dentro do próprio objeto, em variáveis especiais denominadas ATRIBUTOS.
        // Dentro do objeto, os atributos são referidos com o prefixo this para
        // diferenciá-los das variáveis comuns.

        // Atribuindo cada parâmetro do construtor a um atributo do objeto
        
        // Atributos PÚBLICOS: podem ser acessados e modificados fora da classe
        //this.base = base
        //this.altura = altura
        //this.tipo = tipo

        // Tornando os atributos PRIVADOS: acessíveis apenas dentro da classe e inacessíveis
        // do lado de fora
        this.#base = base
        this.#altura = altura
        this.#tipo = tipo

    }

    // getter: permite que o valor de um atributo PRIVADO seja acessado fora da classe,
    // mas no modo SOMENTE-LEITURA
    get base() {
        return this.#base
    }
    
    get altura() {
        return this.#altura
    }

    get tipo() {
        return this.#tipo
    }
}

let forma1, forma2, forma3

try {
    // Criando objetos a partir da classe
    forma1 = new FormaGeometrica(5.4, 7.7, 'T') // -> parâmetros do construtor
    console.log('forma1:', forma1.base, forma1.altura, forma1.tipo)
}
catch(erro) {
    console.log('ERRO: ' + erro.message)
}

// Tratamento de exceção
try {   // TENTA executar as instruções que estão dento desse bloco
    // Caso aconteça algum erro dentro deste bloco, ele será interrompido
    // e a execução passará ao bloco catch
    forma2 = new FormaGeometrica(8, 3.5, 'J')
    console.log('forma2:', forma2.base, forma2.altura, forma2.tipo)
}
// O bloco catch recebe o erro que aconteceu, e nos dá oportunidade de 
// tratá-lo sem abortar a execução do programa
catch(erro) {
    console.log('Não foi possível criar o objeto. Motivo: ' + erro.message)
}

try {
    // Criando objetos a partir da classe
    forma3 = new FormaGeometrica(4, 3, 'E') // -> parâmetros do construtor
    console.log('forma3:', forma3.base, forma3.altura, forma3.tipo)
}
catch(erro) {
    console.log('ERRO: ' + erro.message)
}

// Alterando a propriedade área de forma1 após a criação do objeto
forma1.base = 'batata'
console.log(forma1)