import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './shared/pages/Login';
import Register from './shared/pages/Register';
import './App.css';

function App() {
  return (
    <div className="App">
       <Router>
      <Routes>
      <Route path="/login" exact Component={Login} />
      <Route path="/register" exact Component={Register} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
