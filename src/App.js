
import './App.css';
import { Name } from './component/Button';

function App() {

  const name = "Aparna"  // data

  function hello(){
    console.log("Hello")
  }
  function fun2(){
    alert("Hii!")
  }

  return (
    <div className="App">
      <Name key1={name} key2={hello} key3={fun2}/>
    </div>
  );
}

export default App;
