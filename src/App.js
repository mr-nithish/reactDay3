import logo from './logo.svg';
import './App.css';
import Head1 from './Head1';
import Section1 from './Section1';
import Nav from './Nav';
import { Cart } from './Cart';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  );
}

export default App;
