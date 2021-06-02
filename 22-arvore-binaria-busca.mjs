import { BinarySearchTree } from './lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()
arvore.insert(35)
arvore.insert(20)
arvore.insert(51)
arvore.insert(26)
arvore.insert(5)
arvore.insert(44)
arvore.insert(16)
arvore.insert(62)
arvore.insert(77)
arvore.insert(40)
arvore.insert(68)

let percurso = []
arvore.inOrderTraversal(val => percurso.push(val))
console.log('Em ordem:', {percurso})

percurso = []
arvore.preOrderTraversal(val => percurso.push(val))
console.log('Pré-ordem:', {percurso})

percurso = []
arvore.postOrderTraversal(val => percurso.push(val))
console.log('Pós-ordem:', {percurso})

let min = arvore.min()
let max = arvore.max()
console.log({min, max})

let existe16 = arvore.search(16)
let existe22 = arvore.search(22)
let existe31 = arvore.search(31)
let existe62 = arvore.search(62)
console.log({existe16, existe22, existe31, existe62})