import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState} from 'react';




function App() {

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
      <Header/>
      <AddTask/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}  onToggle={toggleReminder}/> : ' No Tasks To Show ' }
    </div>
  );
}

export default App;
 