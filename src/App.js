import "./App.css";
import Authorizacion from "./components/Authorizacion/Authorizacion";
import Categories from "./components/Categories/Categories";
import Footer from "./components/Footer/Footer";
import Participant from "./components/Participant/Participant";
import Privelege from "./components/Privelege/Privelege";
import clsx from "clsx";

function App() {
  const componentLists = [
    { id: 1, name: "Privelege", component: Privelege },
    { id: 2, name: "Categories", component: Categories },
    { id: 3, name: "Participant", component: Participant },
    { id: 4, name: "Authorizacion", component: Authorizacion },
    { id: 5, name: "Footer", component: Footer },
  ];

  return (
    <div className="relative w-full h-full min-w-full min-h-full overflow-hidden text-lg">
      <main>
        {componentLists.map((componentItem) => {
          const SectionComponent = componentItem.component;

          return (
            <section
              key={componentItem.id}
              className={clsx(
                "h-full bg-gray flex items-center justify-center",
                {
                  "sm:h-screen bg-regal-blue sm:max-h-530 overflow-hidden": componentItem.name === "Privelege",
                  "bg-white": componentItem.name === "Authorizacion",
                }
              )}
            >
              <div
                className={clsx(
                  "max-w-1440 h-full w-full py-16 sm:py-0 px-12 sm:px-16 md:px-20 lg:px-32 xl:px-40",
                  {
                    "max-sm:pt-0 sm:pb-[70px]":
                      componentItem.name === "Participant",
                  }
                )}
              >
                <SectionComponent />
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

export default App;
