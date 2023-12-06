import './App.css';
import Header from './componets/shooping_card/header';
import Home from './componets/shooping_card/home';
import Checkout from './componets/shooping_card/checkout';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
        
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<><Header/><Checkout/></>}></Route>
          <Route path="/" element={<><Header/><Home/></>}></Route>
        </Routes>
     
      </Router>
    </div>
  );
}

export default App;
