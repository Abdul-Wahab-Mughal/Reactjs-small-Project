import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TodoList from "./Pages/TodoList";
import KitGaming from "./Pages/KitGaming";
import Calculator from "./Pages/Calculator";

function App() {
  // const navigate = useNavigate();
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Todo-list" element={<TodoList />} />
          <Route path="Calculator" element={<Calculator />} />
          <Route path="Kit Gaming" element={<KitGaming />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
