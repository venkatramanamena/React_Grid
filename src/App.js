
import './App.css';
import Header from "./Components/Header";
import LatestComp from './Components/LatestComp';
import CardSection from './Components/CardSection';
function App() {
  return (
    <div>
      <Header/>
     <div className='adj'>
     <LatestComp/>
     <CardSection/>
     </div>

    </div>
  );
}

export default App;
