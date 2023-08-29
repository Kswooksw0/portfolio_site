import "./App.css";
import "./index.css"
import HomePage from "./components/HomePage.jsx"
import { Projects } from "./components/Projects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";

function App() {
	return (<div className="text-textColHighlight">
        <Router>
            <Navbar/>
            <Routes> 
                <Route path="/" element={<HomePage/>}></Route>
                <Route path="/projects" element={<Projects/>}></Route>
            </Routes>
        </Router>
    </div>
	);
}

export default App;
