import "./App.css";
import Singleton from "./Patterns/Singleton";
import { personProxy } from "./Patterns/Proxy/person";

function App() {
  personProxy.name;
  personProxy.age = 43;

  return (
    <div className="App">
      <Singleton />
    </div>
  );
}

export default App;
