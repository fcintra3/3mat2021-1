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
        //console.log(this.#head, this.#tail, this.#count)
    }

    get empty() {
        return this.#count === 0
    }

    get count() {
        return this.#count
    }

    // Inserção no final da lista
    insertTail(val) {
        this.insert(this.#count, val)
    }

    // Inserção no início da lista
    insertHead(val) {
        this.insert(0, val)
    }

    // Inserção em qualquer posição
    insert(pos, val) {

        // pos não pode ser negativo
        if(pos < 0) return     // Sai sem fazer nada
        
        const node = new Node(val)

        // Lista está vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        // Inserção no início
        else if(pos === 0) {
            node.next = this.#head
            this.#head = node
        }
        // Se pos for maior ou igual ao número de elementos da lista,
        // inserimos no final
        else if(pos >= this.#count) {
            this.#tail.next = node
            this.#tail = node
        }
        else {

            // Em uma inserção posicional, é necessário, primeiramente,
            // encontrar o nodo da posição ANTERIOR à posição de inserção
            let prev = this.#head  // Nodo anterior à posição de inserção
            for(let i = 0; i < pos - 1; i++) {
                prev = prev.next    // Percurso da lista até a posição desejada
            }
            let next = prev.next
            
            // O novo nodo passa a ser o next do nodo anterior (prev)
            prev.next = node
            // O próximo do novo nodo deve ser o next
            node.next = next
        }
        this.#count++

    }

    remove(pos) {

        if(pos < 0 || pos >= this.#count) return undefined
        let removed 

        // Remoção no início da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = removed.next
        }
        // Remoção do meio ou do final da estrutura
        else {
            let prev = this.#head
            for(let i = 0; i < pos - 1; i++) prev = prev.next
            removed = prev.next
            let next = removed.next
            prev.next = next

            // Remoção do último nodo
            if(pos === this.#count - 1) this.#tail = prev
        }
        this.#count--
        
        return removed.data
    }

    removeHead() {      // Atalho para remoção do primeiro elemento
        return this.remove(0)
    }

    removeTail() {      // Atalho para remoção do último elemento
        return this.remove(this.#count - 1)
    }

    peek(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos >= this.#count) return undefined

        // 2º caso: posição é o início da lista
        if(pos === 0) {
            return this.#head.data
        }
        // 3º caso: posição é a do último elemento da lista
        else if(pos === this.#count - 1) {
            return this.#tail.data
        }
        // 4º caso: posição intermediária
        else {
            let peeked = this.#head
            for(let i = 0; i < pos; i++) peeked = peeked.next
            return peeked.data
        }
    }

    peekHead() {
        return this.peek(0)
    }

    peekTail() {
        return this.peek(this.#count - 1)
    }

    // Permite que o número de elementos seja consultado fora da classe
    get count() {       
        return this.#count
    }

    print() {
        let output = '( '
        let node = this.#head   
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}] ` + JSON.stringify(node.data)
            if (node.next) output += ' -> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`
    }
}