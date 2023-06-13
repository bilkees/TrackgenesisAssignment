import logo from './logo.svg';
import './App.css';
import Productlist from './components/Productlist';
import Header from './components/Header';
import Footer from './components/Footer';
//import Footer from './components/xxxFooter';

function App() {
  return (
    <div className="App">
      <Header/>
     <Productlist/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
