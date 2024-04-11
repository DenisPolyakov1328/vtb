import "./App.css";
import Authorizacion from "./components/Authorizacion/Authorizacion";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Participant from "./components/Participant/Participant";
import Privelege from "./components/Privelege";

function App() {
  return (
    <div className="relative w-full min-w-full min-h-full overflow-hidden text-lg">
      <main className="max-w-6xl m-auto">
        <section>
          <Privelege />
        </section>
        <section>
          <Categories />
        </section>
        <section>
          <Participant />
        </section>
        <section>
          <Authorizacion />
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
