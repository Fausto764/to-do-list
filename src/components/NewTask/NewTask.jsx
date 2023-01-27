import { useState } from "react";

const NewTask= ({lista, setLista})=>{
    // const [updatedList, setUpdatedList] = useState(lista)
    return lista.map((element, index)=>{
            function borrada(){
                setLista(lista.filter((item)=> item != element))
            }
        return (
                <li className='Task__li' key={index}>
                        <p className="Task__p">{element}</p> 
                        <button className='Task__button-delete' onClick={borrada}/>
                </li>
            )
    })


    
}
export {NewTask}
