import './App.css';
import { add ,Mult} from './Add';
import { Greeting, UserCard } from './Greeting';


function App() {

  const num1 = 5;
  const num2 = 3;
  return (
    <>
      <div>
        <h1>Resultado de la suma:</h1>
        <h2>{<Mult num1={num1} num2={num2} />}</h2>
      </div>

      <div>
        <p> code from greeting</p>
        {/* <Greeting title = "hola react" name="jack" salary={5000 + 'usd'}/>
        <Greeting title = "hola javascript" name="ryan" salary={3000 + 'usd'}/> */}
        <UserCard name="ryan" salary={3000 + 'usd'} married={true} addres='avenida siempre viva, springfield 1030'/>
      </div>
      


    </>
  );
}

export default App;
