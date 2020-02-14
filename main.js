document.addEventListener('DOMContentLoaded',()=>{
    document.querySelector('.colorPicker')
    .addEventListener('change', event => {
        document.querySelector('main').style.backgroundColor  =event.target.value;
        document.querySelector('h2').style.color  =event.target.value;
        document.querySelector('.done h2').style.color  =event.target.value;
    })
    
    document.querySelector('.inputTareas')
    .addEventListener('keyup', event => {
        if(event.keyCode===13){
            event.target.value;
            let Task = document.createElement('div');
            Task.className='mensaje';
            Task.innerText = event.target.value; //asignar el texto
            //document.querySelector('.tareas').appendChild(Task) //añadir tarea
            event.target.value="" //limpiamos rl input

            let completeButton = document.createElement('button');
            completeButton.innerText= '✔️';
            completeButton.className="terminadobtn"
            completeButton.addEventListener('click', event => {
                event.target.parentNode.classList.toggle('completed');
            })
            let removeButton = document.createElement('button');
            removeButton.innerText= '❌';
            removeButton.className="completedBtn";
            removeButton.addEventListener('click', event => {
                let opcion=confirm("¿Quires borrar la tarea?");
                        if (opcion===true){
                            event.target.parentNode.remove('Borrado');
                        }
            })
            let Done = document.createElement('button');
            let Fecha =document.createElement('p')
            let hoy = new Date();
            Done.innerText='Hecho';
            Done.addEventListener('click', event => {
                document.querySelector('.done').appendChild(event.target.parentNode,)
                event.target.style.display="none" 
                document.querySelector('.done').appendChild(event.target.parentNode,)
                let Fecha =document.createElement('p')
                let hoy = new Date();
                Fecha.className="fechaDone";
                Fecha.innerHTML= (`Terminada el día ${hoy.getDate()}/${hoy.getMonth()+1}/${hoy.getFullYear()} a las
                ${hoy.getHours()}:${hoy.getMinutes()}
                 `);
                 Done.parentNode.append(Fecha);
            })
            
        
            
            let Datte = document.createElement('p')
            let today = new Date();
            Datte.className="fecha";
            Datte.innerHTML= (`Creada el día  ${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} a las
             ${today.getHours()}:${today.getMinutes()}
            `);
        
            Task.appendChild(Datte);
            
            
            let Comentarios = document.createElement('input');
            
            Comentarios.addEventListener('keyup', event => {
                if(event.keyCode===13){
                    let coment = document.createElement('p');
                    coment.innerText = event.target.value;
                    event.target.value="";
                    coment.className="place";
                        Task.appendChild(coment);
                    let completeButton = document.createElement('button');
                    completeButton.innerText= '✔️';
                    completeButton.addEventListener('click', event => {
                            event.target.parentNode.classList.toggle('completed');
                    })
                    let removeButton = document.createElement('button');
                    removeButton.innerText= '❌';
                    removeButton.className="completedBtn";
                    removeButton.addEventListener('click', event => {
                        let opcion=confirm("¿Quires borrar la tarea?");
                        if (opcion===true){
                            event.target.parentNode.remove('Borrado');
                        }
                            
                    

                            
                    })
                    coment.appendChild(completeButton);
                    coment.appendChild(removeButton);
                }
            })
            
            Task.appendChild(completeButton);
            Task.appendChild(removeButton);
            Task.appendChild(Comentarios);
            Task.appendChild(Done);
            document.querySelector('.tareas').appendChild(Task)
        }
        
        
        
            

            
        
    })   
});