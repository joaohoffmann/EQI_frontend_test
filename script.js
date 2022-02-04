const indicadores = "http://localhost:3000/indicadores"
const simulacoes = "http://localhost:3000/simulacoes"

function getSimulacoes() {
  axios.get(simulacoes)
  .then(response => {
    let data = response.data 
    conteudo.innerHTML = JSON.stringify(data)
  })
  .catch(error => console.error(error))
}
getSimulacoes()