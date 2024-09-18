import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import logo from './logo.svg';
import Exercise from './views/exercise';
import Exercises from './views/exercises'; // Компонент со списком задач

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          {/* Главная страница со списком задач */}
          <Route path="/" element={<Exercises />} />

          {/* Страница с деталями задания */}
          <Route path="/exercise/:id" element={<Exercise />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
