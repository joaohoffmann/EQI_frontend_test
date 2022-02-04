const indicadores = "http://localhost:3000/indicadores"
const simulacoes = "http://localhost:3000/simulacoes"


onload(getIndicadores())


function getIndicadores() {
  axios.get(indicadores)
  .then(response => {
    const data = response.data
    const cdi = data.slice(0,1)
    const ipca = data.slice(1)
    const cdiValor = cdi.map((item)=>{
      return CDI.value = `${item.valor}%`
    })
    const ipcaValor = ipca.map((item)=>{
      return IPCA.value = `${item.valor}%`
    })

     
    })
  .catch(error => console.error(error))
}