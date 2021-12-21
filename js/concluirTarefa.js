const BotaoConclui = () => { 
    const botaoConclui = document.createElement('button')  
    
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'concluir'
  
    botaoConclui.addEventListener('click', concluirTarefa) //quando clicar vai executar a tarefa de baixo
  
    return botaoConclui
  
  }
  
  const concluirTarefa = (evento) => {
    const botaoConclui = evento.target // indica o alvo do evento
  
    const tarefaCompleta = botaoConclui.parentElement // variavel para pegar o pai do elemento
  
    tarefaCompleta.classList.toggle('done') // vai executar essa classe assim q executar o css
  }

export default BotaoConclui