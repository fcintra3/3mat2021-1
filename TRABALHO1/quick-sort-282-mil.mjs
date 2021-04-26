let comps, trocas, passadas

function quickSort(vetor, fnComp, ini = 0, fim = vetor.length - 1) {
    if(fim > ini) {     // Deve ter mais de um elemento para ordenar
        passadas++
        let pivot = fim
        let div = ini - 1
        // for indo do primeiro elemento até o PENÚLTIMO
        for(let i = ini; i < fim; i++) {
            if(fnComp(vetor[pivot], vetor[i])) {    // Parâmetros invertidos
                div++
                [ vetor[i], vetor[div] ] = [ vetor[div], vetor[i] ]
                trocas++
            }
            comps++
        }
        div++
        // Colocando o pivô em seu lugar definitivo
        if(fnComp(vetor[div], vetor[pivot])) {       // Parâmetros invertidos
            [ vetor[pivot], vetor[div] ] = [ vetor[div], vetor[pivot] ]
            trocas++
        }
        comps++

        // Quicksort à esquerda
        quickSort(vetor, fnComp, ini, div - 1)

        // Quicksort à direita
        quickSort(vetor, fnComp, div + 1, fim)
    }
}

import { gastos } from './cota-parlamentar-282-mil.mjs'

// Ordenando pelo nome de urna do candidato
trocas = 0, comps = 0, passadas = 0
console.time('Ordenando quick sort...')
quickSort(gastos, (a, b) => {       // Ordenação em três níveis
    if(a.partido === b.partido) {
        if(a.nome_parlamentar == b.nome_parlamentar) {
            return a.id_documento > b.id_documento
        }
        else return a.nome_parlamentar > b.nome_parlamentar
    }
    else return a.partido > b.partido
})

console.timeEnd('Ordenando quick sort...')
console.log('DEPOIS: ', gastos)
console.log({trocas, comps, passadas})