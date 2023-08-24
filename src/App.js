import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  let name="Harry"
  return (
 <>
     <Navbar title="TextUtils" AboutText="About Us"/>
     <div className="container" ><TextForm heading="Enter the text to analyze"></TextForm></div>
     
     </>
  );
}

export default App;
