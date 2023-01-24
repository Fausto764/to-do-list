import './Task.css'
import { NewTask} from '../NewTask/NewTask'
import { useState } from 'react';
const Task = ()=>{
    let [input, setInput] = useState('');
    let [tasks, setTask] = useState([]);
    function createTask(task){
        return{
            setTask([...tasks, task]);
            console.log(tasks)
        }
       
    }

    return(
        <main className="Task">
            <section className='Task__section-dashboard'>
                <input className='Task__input' onChange={(event)=>{
                    setInput(event.target.value);
                }}/>
                <button className='Task__button-create' onClick={()=> createTask(input)}>Crear</button>
            </section>
                
            <section className='Task__section-task'>
               <NewTask lista={tasks}/>
            </section>

        </main>
        
    )
}
export default Task