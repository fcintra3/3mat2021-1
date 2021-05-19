import { DoublyLinkedList } from './lib/DoublyLinkedList.mjs'

const lista = new DoublyLinkedList()
console.log(lista.print())

lista.insert(0, 45) // Início
console.log(lista.print())

lista.insert(1, 19) // Final
console.log(lista.print())

lista.insert(0, 26) // Início
console.log(lista.print())

lista.insert(1, 30) // Posição intermediária
console.log(lista.print())

lista.insert(2, 51) // Posição intermediária
console.log(lista.print())

lista.insert(3, 9) // Posição intermediária
console.log(lista.print())

lista.insert(2, 66) // Posição intermediária
console.log(lista.print())
console.log(lista.printReverse())

lista.insertHead(74)
console.log(lista.print())

lista.insertTail(83)
console.log(lista.print())

let peek0 = lista.peek(0)
let peek5 = lista.peek(5)
let peek8 = lista.peek(8)
let peek9 = lista.peek(9)
console.log({peek0, peek5, peek8, peek9})

let removed = lista.remove(0)   // Posição inicial
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(7)   // Posição final
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(4)   // Posição intermediária
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())

removed = lista.remove(2)   // Posição intermediária
console.log({removed})
console.log(lista.print())
console.log(lista.printReverse())