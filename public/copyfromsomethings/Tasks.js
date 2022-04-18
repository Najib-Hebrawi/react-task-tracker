
const tasks =[
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
];




const Tasks = () => {
  return (
    <>
        {tasks.map((task) =>(
        <h3 key={task.id}>{task.text}</h3>))}

    </>
  )
}



export default Tasks;