import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect} from 'react'; // id order to loead the data to the page loeads we use useEffect.




function App() {

  //  another state to add button, to show the lale to add button.
  const [showAddTask, setShowAddTask] = useState(false);
  // thise  here is app level state.
  const [tasks, setTasks] = useState([]);


  // By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we'll refer to it as our “effect”), and call it later after performing the DOM updates.
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  },[]) // we add [] (dependency array) because // if you have a value where you want this to run if that value changes you would pass it here [...] like user or somethings  we do not have any dependencies but we want to pass in just an empty array 


  // fetch Tasks //// usng the fetch api with a sync away, to get data.
  const fetchTasks = async () =>{
    const res = await fetch('http://localhost:8000/tasks') // because fetch returns a promise so we want to await that promise.
    const data = await res.json() // json-server

    return data
  }



// Add Task //  that will give me a random number of id.
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task}
  setTasks([...tasks, newTask])
}

// delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}
 

// Toggle reminder
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? { ...task, reminder : !task.reminder} : task))

}



  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask (!showAddTask)} showAdd={showAddTask}/>
      {showAddTask &&  <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : ' No Tasks To Show ' }
    </div>
  );
}

export default App;
 