import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Home";
import TodoList from "./Pages/TodoList";
import KitGaming from "./Pages/KitGaming";
import Calculator from "./Pages/Calculator";
import Clock from "./Pages/Clock";
import Timer from "./Pages/Timer";
import RandomColor from "./Pages/RandomColor";
import Counter from "./Pages/Counter";
import HoverBox from "./Pages/HoverBox";
import MovieTV from "./Pages/Movie_TV";
import QuizApp from "./Pages/Quiz App";

function App() {
  // const navigate = useNavigate();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Todo List" element={<TodoList />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Clock" element={<Clock />} />
          <Route path="Timer" element={<Timer />} />
          <Route path="RandomColor" element={<RandomColor />} />
          <Route path="Counter" element={<Counter />} />
          <Route path="Hover Box" element={<HoverBox />} />
          <Route path="Quiz App" element={<QuizApp />} />

          <Route path="Movie/TV" element={<MovieTV />} />
          <Route path="Kit Gaming" element={<KitGaming />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
