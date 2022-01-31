import { 
  BrowserRouter as Router, // two kinds of router (BrowserRouter, HashRouter)
  Routes, 
  Route, 
 } from "react-router-dom"

import Home from "./routes/Home"
import Pseudo from "./routes/Pseudo"
import Styled from "./routes/Styled"
import Theme from "./routes/Theme"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/styled" element={<Styled />}/>
        <Route path="/pseudo" element={<Pseudo />}/>
        <Route path="/theme" element={<Theme />}/>
      </Routes>
    </Router>
  );
}

export default App;
