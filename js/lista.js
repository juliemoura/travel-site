(() => { // estratégia para que o código não vaze pelo dev tools
    
  const criarTarefa = (evento) => {

  evento.preventDefault() // previne que algo do evento aconteça.

  const lista = document.querySelector('[data-list]') //pega a ul da lista
  const input = document.querySelector('[data-form-input]') // pega o input
  const valor = input.value  // pega o valor do input e bota dentro da const valor

  const tarefa = document.createElement('li')  // cria um novo li
  tarefa.classList.add('task')
  const conteudo = `<p class="content">${valor}</p>` // pega o conteudo html e insere o valor em js la dentro

  tarefa.innerHTML = conteudo // coloca no html o conteudo

  tarefa.appendChild(BotaoConclui())
  tarefa.appendChild(BotaoDeleta())
  lista.appendChild(tarefa) // adiciona os elementos um abaixo do outro
  input.value = " "

}


const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

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




})()