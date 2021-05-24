/*
    ESTRUTURA DE DADOS TABELA DE DISPERSÃO (OU TABELA DE ESPALHAMENTO)

    - Esta estrutura mantém um VETOR de outras estruturas (no caso que vamos
      exemplificar, serão listas duplamente encadeadas)
    - Digamos que teremos um vetor de 10 listas duplamente encadeadas. Ao inserir
      um valor na tabela de dispersão, devemos determinar em qual das 10 listas
      o valor será inserido
    - A tarefa de determinar em qual das listas o valor será inserido cabe a uma
      função especial, chamada FUNÇÃO DE ESPALHAMENTO, FUNÇÃO DE DISPERSÃO ou
      FUNÇÃO DE HASH.
    - A função de espalhamento será utilizada também na busca e na remoção de valores.

*/

import { DoublyLinkedList } from './DoublyLinkedList.mjs'

export class HashTable {

    #hashTable      // Vetor contendo as demais estruturas
    #hashFunction   // Função de espalhamento

    constructor(count, hashFunction) {
        // count ~> quantidade de estruturas no vetor
        // hashFunction ~> função de espalhamento

        this.#hashTable = []
        
        // Criando as estruturas e colocando dentro do vetor
        for(let i = 0; i < count; i++) this.#hashTable.push(new DoublyLinkedList())

        // Armazena a função de espalhamento passada para uso posterior
        this.#hashFunction = hashFunction
    }

    print() {
        let output = ''
        for(let i = 0; i < this.#hashTable.length; i++) {
            output += `[${i}] => ${this.#hashTable[i].print()}\n`
        }
        output += '-------------------------------------------------------------\n'
        return output
    }

    insert(val) {
        // Chamada à função de espalhamento para determinar em qual
        // lista o número será inserido
        const pos = this.#hashFunction(val)
        this.#hashTable[pos].insertTail(val)
    }

    remove(val) {
        // Procura em qual lista pode estar o valor
        const posList = this.#hashFunction(val)

        // Procura a posição do valor dentro da lista
        const posVal = this.#hashTable[posList].indexOf(val)

        // Finalmente, mandamos remover
        return this.#hashTable[posList].remove(posVal)
    }

    // A tabela possui ou não o valor especificado?
    includes(val) {
        const posList = this.#hashFunction(val)
        return this.#hashTable[posList].indexOf(val) >= 0
    }

}

function qualLista(val) {
    // Como são 7 listas (numeradas de 0 a 6), no caso de números
    // vamos simplesmente dividir o valor por 7 e usar o resto da
    // divisão para determinar em qual lista o valor deve estar
    if(typeof val === 'number') return val % 7

    else if(typeof val === 'string') {
        let soma = 0
        for(let i = 0; i < val.length; i++) soma += val.charCodeAt(i)
        return soma % 7
    }
}

const tabela = new HashTable(7, qualLista)
console.log(tabela.print())

tabela.insert(65)
tabela.insert(12)
tabela.insert(30)
tabela.insert(47)
tabela.insert(52)
tabela.insert('Água mineral com gás')
tabela.insert('Feijão bolinha (kg)')
console.log(tabela.print())

let removed1 = tabela.remove(52)
let removed2 = tabela.remove('Feijão bolinha (kg)')
let removed3 = tabela.remove(25)
console.log({removed1, removed2, removed3})
console.log(tabela.print())

let includes1 = tabela.includes('Água mineral com gás')
let includes2 = tabela.includes(47)
let includes3 = tabela.includes(10)
console.log({includes1, includes2, includes3})