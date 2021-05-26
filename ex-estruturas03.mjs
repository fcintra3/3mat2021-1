/*
    Implemente um programa que receba números em ordem aleatória, mas os
    insira em ordem crescente em uma lista encadeada. Os números devem ser
    adicionados à lista um por vez.

    Por exemplo, inserir o número 25, a lista fica ( 25 )
    Na sequência, insira o número 14, a lista fica ( 14, 25 )
    Insira o número 19, a lista fica (14, 19, 25)
    Insira o número 3, a lista fica (3, 14, 19, 25)

    A cada inserção, o programa deve determinar a posição correta de inserção
    para manter a lista em ordem.

    Data de entrega: 26/05, até 11h20, valendo nota de participação
*/

// Pode ser a lista de encadeamento simples também
import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const lista = new DoublyLinkedList()

function insertInList(num) {
    // 1º caso: lista vazia
    if(lista.empty) {
        lista.insertHead(num)   // Insere no início da lista
    }
    // 2º caso: inserção intermediária
    else {
        // Percorre a lista do início ao fim
        for(let i = 0; i < lista.count; i++) {
            // Busca o valor na posição do for
            let valPos = lista.peek(i)
            // Se o valor que já está na lista é maior do
            // que o número que deve ser inserido, foi encontrada
            // a posição de inserção
            if(valPos > num) {
                lista.insert(i, num)
                return  // Sai da função
            }
        }
        // Se chegamos ao final do for, é porque o novo número
        // é maior do que todos os que já estão na lista. Portanto,
        // ele deve ser inserido no final
        lista.insertTail(num)
    }
}

insertInList(25)
console.log(lista.print())

insertInList(14)
console.log(lista.print())

insertInList(19)
console.log(lista.print())

insertInList(3)
console.log(lista.print())

insertInList(31)
console.log(lista.print())

insertInList(22)
console.log(lista.print())