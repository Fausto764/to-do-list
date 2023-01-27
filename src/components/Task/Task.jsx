import './Task.css'
import { NewTask} from '../NewTask/NewTask'
import { useState } from 'react';
const Task = ()=>{
    let [input, setInput] = useState('');
    let [tasks, setTasks] = useState([]);
    function createTask(){
        if (input !== ''){
            setTasks([...tasks, input]);
            setInput('');
        }
    }
  

    return(
        <main className="Task">
            <section className='Task__section-dashboard'>
                <input className='Task__input' value={input} onChange={event=>{
                    setInput(event.target.value);
                }}/>
                <button className='Task__button-create' onClick={createTask}>Crear</button>
            </section>
                
            <section className='Task__section-task'>
                <ul className='Task__ul'>
                    <NewTask lista={tasks} setLista={setTasks}/>
                </ul>
            </section>

        </main>
        
    )
}
export default Task