import BotaoConclui from './concluirTarefa.js'
import BotaoDeleta from './deletarTarefa.js'    

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
