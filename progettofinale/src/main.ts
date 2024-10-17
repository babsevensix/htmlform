import * as bootstrap from 'bootstrap';
import { TodoModel } from './todo.model';




const btnLoadData  = document.getElementById('btnLoadData') as HTMLButtonElement | null;

if (btnLoadData != null){
  //Senza async await 
  // btnLoadData.addEventListener('click', ()=>{
  //   console.log(' Bottono cliccato');
  //   fetch('https://jsonplaceholder.typicode.com/users/1/todos')
  //     .then(response => response.json())
  //     .then(valoreDiRisposta =>{
  //       console.log(valoreDiRisposta);
  //     });
  // });
  //Piu leggibile
  btnLoadData.addEventListener('click',async ()=>{
    
    console.log(' Bottono cliccato');
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
    const valoreDiRisposta: Array<TodoModel> = await response.json();
    console.log(valoreDiRisposta);

    const tbody = document.getElementById('tbody');
    valoreDiRisposta.forEach(todoSingolo =>{

      const tr = document.createElement('tr');
      const tdTitle = document.createElement('td');
      tdTitle.innerHTML = todoSingolo.title;
      const tdCompleted = document.createElement('td');
      tdCompleted.innerHTML = ''+todoSingolo.completed;

      tr.append(tdTitle);
      tr.append(tdCompleted);
      
      tbody?.append(tr);
    });
  });
}

