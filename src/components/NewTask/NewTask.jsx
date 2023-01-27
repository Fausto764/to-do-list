import { useState } from "react";

const NewTask= ({lista})=>{
    const [mode, setMode] = useState(false)
    return lista.map((element, index)=>{
        setMode(false)
        let updatedList = lista.filter((item, index)=> lista.indexOf(item) != lista.indexOf(element));
        function deleteItem(){
                console.log(updatedList)
                setMode(true)
            }  
            
        return (
                <li className='Task__li' key={index}>
                        <p className="Task__p">{mode ? updatedList[index] : element}</p>
                        <button className='Task__button-delete' onClick={deleteItem}/>
                </li>
            )
    })


    
}
export {NewTask}
