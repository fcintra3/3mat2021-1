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
        /*
            if empty, do nothing
            Vertex pre = head
            for (k = 0; k < i-1; k++)
            pre = pre.next
            Vertex del = pre.next, aft = del.next
            pre.next = aft // bypass del
            delete del
        */
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

    print() {
        let output = '( '
        let node = this.#head   
        for(let i = 0; i < this.#count; i++) {
            output += `[${i}] ` + JSON.stringify(node.data)
            if (node.next) output += ' -> '
            node = node.next
        }
        return output + ' )'
    }
}

let lista = new LinkedList()
console.log(lista.print())

lista.insertTail(45) // 1
console.log(lista.print())

lista.insertTail(22) // 2
console.log(lista.print())

lista.insertTail(87) // 3
console.log(lista.print())

lista.insertHead(33) // 0
console.log(lista.print())

// Inserindo na posição 2 (no lugar do 22)
lista.insert(2, 10)
console.log(lista.print())

lista.insert(0, 51)
console.log(lista.print())

lista.insert(6, 4)
console.log(lista.print())

lista.insert(10, 73)
console.log(lista.print())

let removed = lista.remove(0)
console.log({removed})
console.log(lista.print())

removed = lista.remove(3)
console.log({removed})
console.log(lista.print())

removed = lista.remove(5)
console.log({removed})
console.log(lista.print())

lista.insertTail(30)
console.log(lista.print())