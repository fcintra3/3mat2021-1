import { LinkedList } from './lib/LinkedList.mjs'

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

removed = lista.removeHead()
console.log({removed})
console.log(lista.print())

removed = lista.removeTail()
console.log({removed})
console.log(lista.print())

let peeked = lista.peek(2)
console.log({peeked})
console.log(lista.print())

peeked = lista.peek(0)
console.log({peeked})
console.log(lista.print())

peeked = lista.peek(3)
console.log({peeked})
console.log(lista.print())