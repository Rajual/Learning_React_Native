import { Formularios } from "./components/Formularios";

const App = () => {

  const nombre:string='Julio';
  const edad=20;
  const poderes=['Indistraible','Sabiduria']

  return (
    <div className="mt-2">
      <h1>Introduccion a React</h1>
      <br/>
{<Formularios/>}
    </div>
  )
}

export default App;