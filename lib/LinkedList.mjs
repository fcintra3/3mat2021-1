/*
    ESTRUTURA DE DADOS LISTA ENCADEADA
    - A lista encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem duas partes: uma, que armazena a
      informação e outra que guarda o endereço do próximo nodo da sequência
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro e percorrendo a sequência
*/

class Node {
    constructor(val) {
        this.data = val
        this.next = null    // O nodo não tem sucessor (é o último)
    }
}

export class LinkedList {
    #head       // Primeiro nodo da estrutura
    #tail       // Último nodo da estrutura
    #count      // Número de nodos da estrutura

    constructor() {
        this.#head = null   // Não tem nodo no início
        this.#tail = null   // Não tem nodo no fim
        this.#count = 0     // Lista vazia
        console.log(this.#head, this.#tail, this.#count)
    }

    get empty() {
        return this.#count === 0
    }

    // Inserção no final da lista
    push(val) {
        // Criação do nodo
        const node = new Node(val)

        // Se a lista estiver vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        else {
            // O último nodo passa a apontar para o novo nodo
            this.#tail.next = node
            // O novo nodo passa a ser o último
            this.#tail = node 
        }
        this.#count++

        console.log(this.#head, this.#tail, this.#count)
    }
}

let lista = new LinkedList()

lista.push(45)
lista.push(22)
lista.push(87)