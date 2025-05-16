function addTask() {

    var input = document.getElementById("input-tarefas")
    console.log(input.value)

    alert("funcao adicionar tarefa ")

    // pega o input 
    var inputValue = document.getElementById("input-tarefas")

    // pega o valor do input 
    var inputValue = input.value;

    // limpar o input
    input.value = "";

    var list = document.getElementById("lista")

    // criar um lemento li
    var li = document.createElement("li")
    
    // adicionar o valor INPUT para o li 
    li.innerText = inputValue;

    // adicionar o LI na lista de tarefas
    list.appendChild(li)
    // adicionar o valor dp IMPUT para o LI

    // li.innerText = inputValue;
    // li.innerHTML = "a tarefa <button>Excluir</button>"
    // li.innerHTML = inputValue + "<button>Excluir</button>"
    li.innerHTML =`${inputValue}"<button onclick ="this.parentElement.remove()">🗑️</button>`;
    // adicionar a função de marcar a tarefa como concluida
    li.onclick = function(){
        li.className = "tarefa-cloncluida"
    }


    console.log(inputValue)
}
