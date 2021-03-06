import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState} from 'react';




function App() {

  //  another state to add button, to show the lale to add button.
  const [showAddTask, setShowAddTask] = useState(false);

  // thise  here is app level state.
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'hej hej',
        day:'Fep 6th at 2:30pm',
        reminder: null,
    },
    {
        id: 2,
        text:'farvel farvel',
        day:'Sep 6th at 2:30pm',
        reminder: null,
    }
]);

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
 