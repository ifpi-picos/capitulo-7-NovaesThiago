const filmes = [
    {titulo:"Mad Max: Estrada da Fúria (2015)", genero:"acao"},
    {titulo:"Superbad - É Hoje (2007)", genero:"comedia"},
    {titulo:"O Poderoso Chefão (1972)", genero:"drama"},
    {titulo:"Blade Runner 2049 (2017)", genero:"ficcao cientifica"},
    {titulo:"O Senhor dos Anéis: A Sociedade do Anel (2001)", genero:"fantasia"},
    {titulo:"La La Land: Cantando Estações (2016)", genero:"musical"},
]

//tive que fazer uma lista predefinida pois não teria como saber o genero do filme caso fosse aleatorio

const filmesRecomendados = filmes.filter(filme => filme.genero === "musical" || filme.genero === "ficcao cientifica")
// o filter vai criar uma arrow function que vai separar a recomendação


console.log("Os filmes recomendados por Thiago são: ", filmesRecomendados)
