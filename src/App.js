import logo from './logo.svg';
import './App.css';
import { Navbar } from './component/Navbar';
import Statcard from './component/pages/Card';
import { Current } from './component/pages/Current';


function App() {
  return (
    <div className="App">
   <Navbar/>
   <Current/>
    </div>
  );
}

export default App;
