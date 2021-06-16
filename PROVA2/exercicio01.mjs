/*

    1) Observe a árvore binária representada na figura "arvore.png". Responda:
        a) Quantos níveis essa árvore possui? => 6 (seis)
        b) Qual a altura da subárvore cuja raiz é 16? => 4 (quatro)
        c) Qual a profundidade do nodo de valor 29? => 5 (cinco)

    2) Monte em código, neste arquivo, a árvore representada na figura.

    3) No código, remova os seguintes nodos: 58, 35, 87 e 51.

    4) Anote, abaixo, os percursos da árvore após as remoções:
        a) Percurso em-ordem: 1, 14, 14, 29, 29, 43, 44, 44, 60, 79, 86, 86, 92, 99
        b) Percurso pré-ordem: 44, 14,  1, 14, 44, 29, 29, 43, 86, 60, 79, 86, 99, 92
        c) Percurso pós-ordem: 14,  1, 29, 43, 29, 44, 14, 86, 79, 60, 92, 99, 86, 44

    5) Anexe este arquivo, com o código da árvore binária de busca, ao
        entregar a prova.

*/

import { BinarySearchTree } from '../lib/BinarySearchTree.mjs'

const arvore = new BinarySearchTree()

let percursoEm = [], percursoPre = [], percursoPos = []

arvore.insert(51)
arvore.insert(16)
arvore.insert(9)

arvore.insert(1)
arvore.insert(14)
arvore.insert(44)
arvore.insert(35)
arvore.insert(20)
arvore.insert(43)
arvore.insert(29)
arvore.insert(87)
arvore.insert(72)
arvore.insert(60)
arvore.insert(58)
arvore.insert(79)
arvore.insert(86)
arvore.insert(99)
arvore.insert(92)

// No código, remova os seguintes nodos: 58, 35, 87 e 51
arvore.remove(58)
arvore.remove(35)
arvore.remove(87)
arvore.remove(51)

arvore.inOrderTraversal(n => percursoEm.push(n))
arvore.preOrderTraversal(n => percursoPre.push(n))
arvore.postOrderTraversal(n => percursoPos.push(n))

console.log({percursoEm})
console.log({percursoPre})
console.log({percursoPos})
