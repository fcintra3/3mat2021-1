/*
    ESTRUTURA DE DADOS LISTA DUPLAMENTE ENCADEADA
    - A lista duplamente encadeada é uma estrutura de dados formada por unidades
      de informação chamadas nodos ou nós.
    - Cada nodo da lista encadeada tem três partes: uma, que armazena a
      informação; outra, que guarda o endereço do nodo anterior; a terceira,
      que guarda o endereço do nodo seguinte
    - A qualquer momento, temos um conhecimento apenas limitado de onde
      se encontram todos os nodos da lista. Sabemos apenas onde está o
      primeiro e o último nodo da sequência. Os nodos intermediários precisam
      ser encontrados partindo-se do primeiro ou do último nodo e percorrendo
      a sequência
*/

class Node {
    constructor(val) {
        this.data = val
        this.prev = null   // Nodo anterior
        this.next = null   // Nodo posterior
    }
}

export class DoublyLinkedList {
    #head
    #tail
    #count

    constructor() {
        this.#head = null
        this.#tail = null
        this.#count = 0
    }

    get empty() {
        return this.#count === 0
    }

    #findNode(pos) {
        let node = null
        // Determinando se o percurso será feito a partir do início
        // (#head) ou do final (#tail)
        if(pos / this.#count < 0.5) { // Nodo na primeira metade da estrutura
            node = this.#head
            for(let i = 0; i < pos; i++) node = node.next
        }
        else {  // Nodo na segunda metade da estrutura
            node = this.#tail
            for(let i = this.#count - 1; i > pos; i--) node = node.prev
        }
        return node
    }

    insertHead(val) {       // Atalho para inserção no início
        this.insert(0, val)
    }

    insertTail(val) {       // Atalho para inserção no final
        this.insert(this.#count, val)
    }

    insert(pos, val) {

        // A posição não pode ser negativa
        if(pos < 0) return  // Sai sem fazer nada

        const node = new Node(val)

        // 1º caso: lista vazia
        if(this.empty) {
            this.#head = node
            this.#tail = node
        }
        // 2º caso: inserção no início
        else if(pos === 0) {
            node.next = this.#head
            this.#head.prev = node
            this.#head = node
        }
        // 3º caso: inserção no final
        else if(pos >= this.#count - 1) {
            node.prev = this.#tail
            this.#tail.next = node
            this.#tail = node
        }
        // 4º caso: inserção em posição intermediária
        else {
            let nodePos = this.#findNode(pos)
            let nodeBefore = nodePos.prev

            // O sucessor do novo nodo passa a ser o nodo da posição
            node.next = nodePos
            // O sucessor do nodo anterior passa a ser o novo nodo
            nodeBefore.next = node
            // O antecessor do novo nodo passa a ser o nodo anterior
            node.prev = nodeBefore
            // O antecessor do nodo da posição passa a ser o novo nodo
            nodePos.prev = node
        }
        this.#count++

    }

    remove(pos) {

        // 1º caso: lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined

        let removed

        // 2º caso: remoção do início da lista
        if(pos === 0) {
            removed = this.#head
            this.#head = this.#head.next    // O início passa a ser o nodo seguinte (2º)
            // Se o novo head for um nodo válido, ele não terá antecessor
            if(this.#head) this.#head.prev = null
            // Atualizando o tail no caso de remoção do último nodo
            if(this.#count === 1) this.#tail = null
        }
        // 3º caso: remoção do final da lista
        else if(pos === this.#count - 1) {
            removed = this.#tail
            this.#tail = this.#tail.prev    // O final passa a ser o nodo anterior (penúltimo)
            // Se o novo tail for um nodo válido, ele não terá sucessor
            if(this.#tail) this.#tail.next = null
            // Atualizando o head no caso de remoção do último nodo
            if(this.#count === 1) this.#head = null
        }
        // 4º caso: remoção em posição intermediária
        else {
            removed = this.#findNode(pos)
            let before = removed.prev
            let after = removed.next
            // Remanejando os apontamentos
            before.next = after
            after.prev = before
        }
        this.#count--

        return removed.data
    }

    removeHead() {
        return this.remove(0)
    }

    removeTail() {
        return this.remove(this.#count - 1)
    }

    peek(pos) {
        // Lista vazia ou posição fora dos limites
        if(this.empty || pos < 0 || pos > this.#count - 1) return undefined
        
        const node = this.#findNode(pos)
        return node.data        
    }

    // Procura um valor dentro da lista encadeada
    // Retorna a posição do valor caso este tenha sido encontrado
    // ou -1, se não existir
    indexOf(val) {
        let node = this.#head
        for(let i = 0; i < this.#count; i++) {
           if(node.data === val) return i   // Encontrou
           node = node.next 
        }
        return -1       // Não encontrou
    }

    print() {
        let output = '( '
        let node = this.#head   
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}] ` + JSON.stringify(node.data)
            if (node.next) output += ' <-> '
            node = node.next
        }
        return output + ` ) count: ${this.#count}`
    }

    printReverse() {
        let output = '( '
        let node = this.#tail   
        for(let i = this.#count - 1; i >= 0; i--) {
            output += `[${i}] ` + JSON.stringify(node.data)
            if (node.prev) output += ' <-> '
            node = node.prev
        }
        return output + ` ) count: ${this.#count}`
    }

}