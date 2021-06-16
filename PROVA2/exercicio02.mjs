/*
    O código abaixo representa um trecho de uma das estruturas de dados estudadas.

    1. Identifique a estrutura de dados e o método (função) representado no código abaixo.
    => Estrutura lista duplamente encadeada (DoubleLinkedList), método insert()
    
    2. Faça o mapeamento das variáveis (registrar em comentário o propósito de cada uma delas).

    c => prev do nodo
    d => next do nodo
    E => DoubleLinkedList
    #f => #head da lista
    #g => #tail da lista
    #h => #count da lista
    i => método insert
    j => posição de inserção
    k => valor a ser inserido
    l => nodo criado para inserção
    m => nodo na posição atual de inserção
    #n => método #findNode()
    o => nodo anterior (before)
        
    3. Comente os principais trechos do código, explicando seu objetivo.
    
*/

class E {

    /* Código omitido */

    i(j, k) {
        // Se a posição for negativa, retorna sem fazer nada
        if(j < 0) return

        // Cria o nodo para inserção
        const l = new A(k)

        // Se a lista estiver vazia, o novo nodo passa a ser tanto head quanto tail
        if(this.empty) {
            this.#f = l
            this.#g = l
        }
        // Inserção na posição 0
        else if(j === 0) {
            l.d = this.#f
            this.#f.c = l
            this.#f = l
        }
        // Inserção ao final da lista (após o tail)
        else if(j >= this.#h) {
            l.c = this.#g
            this.#g.d = l
            this.#g = l
        }
        // Inserção em posição intermediária
        else {
            let m = this.#n(j)  // Encontra o nodo da posição
            let o = m.c         // Encontra o nodo anterior à posição
            l.d = m
            o.d = l
            l.c = o
            m.c = l
        }
        this.#h++   // Incrementa o contador da lista

    }

    /* Código omitido */

}