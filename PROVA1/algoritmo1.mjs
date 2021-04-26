/*
    ALGORITMO DE BUSCA BINÁRIA

    MAPEAMENTO DAS VARIÁVEIS
    k -> função que representa o algoritmo de busca
    m -> vetor onde será processada a busca
    n -> valor a ser buscado (desnecessário quando há função de comparação)
    o -> posição inicial no vetor
    p -> posição final no vetor
    q -> posição calculada do meio do vetor
    f -> função de comparação
*/
function k(m, f) {
    let o = 0, p = m.length - 1, q
    while(p >= o) {
        q = Math.floor((p + o) / 2)
        /*if(m[q] === n) return q
        else if(n > m[q]) o = q + 1
        else p = q - 1*/
        switch(f(m[q])) {
            case 0:  // Valor de busca idêntico ao valor do meio
                return q    // Retorna a posição do meio
            case -1: // Valor de busca menor que valor do meio
                p = q - 1   // Fim passa a ser igual a meio - 1
                break
            default: // (case 1) Valor de busca maior que valor do meio
                o = q + 1   // Início passa a ser igual a meio + 1
        }
    }
    return -1  // Não existe
}

import { countries } from './countries.mjs'

console.log(k(countries, (valorVetor, valorBusca = 'Brazil') => {
    if(valorBusca === valorVetor.country) return 0
    else if (valorBusca < valorVetor.country) return -1
    else return 1
}))
