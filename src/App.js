import logo from './logo.svg';
import './App.css';
// import Tree from './Tree';
import Menu from "../src/data.js";
import Sample from './Sample';
function App() {
  return (
   <>
   <Sample data={Menu} />
   </>
  )
}

export default App;
