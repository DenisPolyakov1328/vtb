import "./App.css";
import Authorizacion from "./components/Authorizacion/Authorizacion";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Participant from "./components/Participant/Participant";
import Privelege from "./components/Privelege";

function App() {

  const component = [
    {id: 1, name: Privelege},
    {id: 2, name: Categories},
    {id: 3, name: Participant},
    {id: 4, name: Authorizacion},
    {id: 5, name: Footer}
  ]

  return (
    <div className="relative w-full min-w-full min-h-full overflow-hidden text-lg">
      <main>
        {component.map((comp) => {
          return (<section key={comp.id} className={`h-screen ${comp.id === 1 && 'bg-regal-blue  max-h-530 overflow-hidden'} flex items-center justify-center`}><div className="max-w-1440 px-40 h-full"><comp.name /></div></section>)
        })}
      </main>
    </div>
  );
}

export default App;
