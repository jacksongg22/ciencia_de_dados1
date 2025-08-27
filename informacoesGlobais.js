const url="https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/transporte/transporte-dados-globais.json"
async function vizualizarInformacoesGlobais() {
    const resposta = await fatch(url)
    
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
     const trabalhadoresMundo = (dados.total_trabalhadores_mundo/1e9)
const tempoDesTrabalho = (dados.tempo_medio_deslocamento_para_trabalho/1e9)
      const minutos =Math.round((tempo_medio_deslocamento_para_trabalho-tempoDesTrabalho/1e9) *60)
    
      const paragrafo= document.createElement('p')
      paragrafo.classList.add('graficos-container_texto')

      paragrafo.innerHTML = `O mundo tem <span>${pessoasMundo}</span>  bilhões de pessoas, dessas pessoas, aproximadamente <span>${trabalhadoresMundo}</span>   bilhões estão empregadas e passam em média  <span>${tempoDesTrabalho}horas</span> e <span>${minutos} minutos</span> por dia no caminho para o trabalho. Temos, portanto, mais da metade da população mundial que não exerce trabalhos com vínculos empregatícios legais. O que pode significar que há longevidade e desse modo, muitas pessoas aposentadas. Porém, também pode significar muitos postos de trabalho chamados informais.`
      const container=document.getElementById('graficos-container')
       container.appendChild('paragrafo')
       
      co

}






