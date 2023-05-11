import './App.css';
import { Form } from './components/Form/Form';
import { Home } from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element=<Home /> />
          <Route path="/form/:id" element=<Form /> />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
