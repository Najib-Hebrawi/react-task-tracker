import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState} from 'react';




function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text:'hej hej',
        day:'Fep 6th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text:'farvel farvel',
        day:'Sep 6th at 2:30pm',
        reminder: false,
    }
]);

// delete task
const deleteTask = (id) =>{
  setTasks(tasks.filter((task) => task.id !== id))
}




  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : ' No Tasks To Show ' }
    </div>
  );
}

export default App;
 