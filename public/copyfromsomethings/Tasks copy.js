



const Tasks = () => {

    const [tasks, setTasks] = useState([
        {
            id: 1,
            text:'hej hej',
            day:'ja ja',
            reminder: true,
        },
        {
            id: 2,
            text:'farvel farvel',
            day:'no no',
            reminder: false,
        }
    ]);

  return (
      
    <>
        {tasks.map((task) =>(
        <h3 key={task.id}>{task.text}</h3>))}

    </>
  )
}



export default Tasks;