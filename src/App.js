import logo from './logo.svg';
import './App.css';
import { EagerRoutes } from "./EagerRoutes";

function App() {
  return (
    <div className="App">
      <h3> Can you type "about", "contact", "gallery" in the URL to test it?</h3>
     <EagerRoutes/>
    </div>
  );
}

export default App;
