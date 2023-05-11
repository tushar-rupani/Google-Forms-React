import './App.css';
import { Body } from './components/Body/Body';
import { Header } from './components/Header/Header';
import { Template } from './components/Templates/Template';

function App() {
  return (
    <div className="App">
      <Header />
      <Template />
      <Body />
    </div>
  );
}

export default App;
