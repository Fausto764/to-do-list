import { CreateTask } from "./NewTask"
const useCreateTask= ({tarea, numero})=>{
    return (
        <article className='Task__article'>
            <div className='Task__li'> Tarea {numero} : {tarea}</div>
            <button className='Task__button-delete'/>
        </article>   

    )
}
export {useCreateTask}