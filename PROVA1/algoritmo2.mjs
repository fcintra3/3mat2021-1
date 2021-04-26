/*
    ALGORITMO DE ORDENAÇÃO MERGE SORT

    MAPEAMENTO DE VARIÁVEIS
    k -> função que representa o algoritmo de ordenação
    m -> vetor a ser ordenado
    n -> meio calculado do vetor
    o -> subvetor da esquerda
    p -> subvetor da direita
    q -> vetor final resultado da mesclagem esq + dir
    r -> subfunção de mesclagem de vetores
    s -> vetor da esquerda na subfunção
    t -> vetor da direita na subfunção
    u -> posição do vetor da esquerda
    v -> posição do vetor da direita
    w -> vetor de resultado
    x -> sobra da mesclagem
    f -> função de comparação
*/
const k = (m, f) => {
    if(m.length > 1) {
        const n = Math.floor(m.length / 2)
        let o = m.slice(0, n)
        let p = m.slice(n)
        o = k(o, f)
        p = k(p, f)
        const q = r(o, p)
        return q
    }
    return m
    function r(s, t) {
        let u = 0, v = 0, w = []
        while(u < s.length && v < t.length) {
            //if(s[u] < t[v]) {
            if(f(t[v], s[u])) { // Parâmetros invertidos
                w.push(s[u])
                u++
            }
            else {
                w.push(t[v])
                v++
            }
        }
        let x
        if(u < v) x = s.slice(u)
        else x = t.slice(v)
        return [...w, ...x]
    }
}

import { countries } from './countries.mjs'

let vetOrd = k(countries, (a, b) => {   // Ordenação em dois níveis
    if(a.continent === b.continent) {
        return a.country > b.country
    }
    else return a.continent > b.continent
})

console.log(vetOrd)