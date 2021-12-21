const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button')
  
    botaoDeleta.classList.add('deleta-button')
    botaoDeleta.innerText = 'deletar'
    botaoDeleta.addEventListener('click', deletarTarefa)
  
    return botaoDeleta
  }
  
  const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target  // indica o alvo do evento
  
    const tarefaCompleta = botaoDeleta.parentElement // variavel para pegar o pai do elemento
  
    tarefaCompleta.remove() // para remover o elemento
  
    return botaoDeleta
  }

  export default BotaoDeleta