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


  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
 