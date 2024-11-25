import { useState } from 'react'

const Todo = () => {
    const [task, setTask] = useState("");
    const [data, setData] = useState([]);
    const [isEditable,setIsEditable] =useState(false);
    const [updatedTask,setUpdatedTask]=useState("");
    const [id,setId]=useState(null);

    const handleChange = (e) => {
        setTask(e.target.value);
    }

    const addTask = () => {
        if(task.trim()===""){
            alert("Do can't be empty");
            return;
        }
        setData([...data,task]);
        setTask("");
    }

    const updateTask=(index)=>
    {
        setIsEditable(true);
        setUpdatedTask(data[index]);
        setId(index);
    }

    const handleTaskChange=(e)=>{
        setUpdatedTask(e.target.value);
    }

    const saveUpdatedTask=(id)=>{
        if(updatedTask.trim()===""){
            alert("Updated Tasks can't be empty");
            return;
        }
        const updatedData=data.map((item,index)=>index===id?updatedTask:item);
        setData(updatedData);
        setIsEditable(false);
    }

    const deleteTask = (id) => {
        // console.log(id);
        const filteredData = data.filter((currEl, index) => {
            return index !== id;
        })
        setData(filteredData);
    }

    return (
        <>
            <div>
                <input type="text" value={task} onChange={handleChange} placeholder="Enter Your Do's" />
                <button onClick={addTask}>Click Me</button>
            </div>
            <div>
                {data.map((currEl, index) => (
                    <div key={index}>
                        {isEditable && id===index?( 
                        <>
                            <input type="text" value={updatedTask} onChange={handleTaskChange}></input>
                            <button onClick={()=>saveUpdatedTask(index)}>Save</button>
                            <button onClick={()=>setIsEditable(false)}>Cancel</button>
                        </>
                        ):(
                    <>
                        <p>{currEl}</p>
                        <button onClick={()=> updateTask(index)}>Edit</button>
                        <button onClick={()=> deleteTask(index)}>Delete</button>
                        </>
                        )}
                    </div>
            ))}
            </div>
        </>
    )
}

export default Todo
