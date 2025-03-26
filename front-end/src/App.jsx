import logo from './logo.svg';
import './App.css';
import './rubric.css'
import ScaleItem from './ScaleItem'

function App() {
  function handleScaleChange(name, id, value){
    console.log(name + id + value)
  }

  return (
    <ScaleItem name="1|1" 
      display="Jack Smith" 
      scales={[{id: 1, value: 0},{id: 2, value: 1}, {id:3, value: 2}]}
      handleScaleChange={handleScaleChange}
    />
  )
}

export default App;
