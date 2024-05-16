import "./App.css";
import Authorizacion from "./components/Authorizacion/Authorizacion";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Participant from "./components/Participant/Participant";
import Privelege from "./components/Privelege/Privelege";

function App() {

  const component = [
    {id: 1, name: Privelege},
    {id: 2, name: Categories},
    {id: 3, name: Participant},
    {id: 4, name: Authorizacion},
    {id: 5, name: Footer}
  ]

  return (
    <div className="relative w-full h-full min-w-full min-h-full overflow-hidden text-lg">
      <main>
        {component.map((comp) => {
          return (<section key={comp.id} className={`h-full ${comp.id === 1 && 'sm:h-screen bg-regal-blue  sm:max-h-530 overflow-hidden'} bg-gray flex items-center justify-center`}><div className={`max-w-1440 h-full w-full py-16 sm:py-0 px-12 sm:px-16 md:px-20 lg:px-32 xl:px-40 ${comp.id === 3 && 'max-sm:pt-0'}`}><comp.name /></div></section>)
        })}
      </main>
    </div>
  );
}

export default App;
