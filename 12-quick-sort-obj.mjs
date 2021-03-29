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

import { candidatos } from './includes/candidatos-2018.mjs'

// Ordenando pelo nome de urna do candidato
trocas = 0, comps = 0, passadas = 0
//console.log('ANTES: ', candidatos)
console.time('Ordenando por nome de registro...')
//quickSort(candidatos, (a, b) => a.NM_URNA_CANDIDATO > b.NM_URNA_CANDIDATO)

// Função de comparação considerando múltiplos níveis de ordenação:
// primeiro por SG_UE, depois por DS_CARGO e, por fim, por NR_CANDIDATO
quickSort(candidatos, (a, b) => {
    if(a.SG_UE === b.SG_UE) {
        if(a.DS_CARGO == b.DS_CARGO) return a.NR_CANDIDATO > b.NR_CANDIDATO
        else return a.DS_CARGO > b.DS_CARGO        
    }
    else return a.SG_UE > b.SG_UE
})

console.timeEnd('Ordenando por nome de registro...')
console.log('DEPOIS: ', candidatos)
console.log({trocas, comps, passadas})