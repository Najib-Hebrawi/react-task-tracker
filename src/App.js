import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState, useEffect} from 'react'; // id order to loead the data to the page loeads we use useEffect.


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'





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

  // Fetch Task by ID
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:8000/tasks/${id}`)
    const data = await res.json()

    return data
  }



// Add Task //  that will give me a random number of id.
const addTask = async (task) => {
  const res = await fetch('http://localhost:8000/tasks', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json', // we add a headers because we need to specify our content type .
    },
    body: JSON.stringify(task), // turn it from javascript object into a json string. and we are sending task
  })
  const data = await res.json() // save the data in data
  setTasks([...tasks, data]) // ...tasks: means we are going to take the existing tasks and then we are going to add on to it data which is the new task that was just created
}

// delete task
const deleteTask = async (id) => {
  await fetch(`http://localhost:8000/tasks/${id}` ,{method: 'DELETE',})
  setTasks(tasks.filter((task) => task.id !== id))
}
 

// Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await fetchTask(id) // getting a task by id
  const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder } // put it(a task we just fetchet) in a variable

  const res = await fetch(`http://localhost:8000/tasks/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(updTask),
  })

  const data = await res.json()

  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    )
  )
}





  return (
    <Router>
      <div className='container'>
        <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
                {showAddTask && <AddTask onAdd={addTask} />}
                {tasks.length > 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                  />
                ) : (
                  'No Tasks To Show'
                )}
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
 