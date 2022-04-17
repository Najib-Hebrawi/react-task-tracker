




function App() {
const  name = "Najib";
const x = true;


  return (
    <div className="container">
      <h1>Hello from react</h1>
      <h2>hello {name} {x ? "yes" : "no"}</h2>
    </div>
  );
}

export default App;
