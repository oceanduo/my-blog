import Topbar from "./components/topbar/topbar";

import "./app.scss"

import Home from "./pages/home/home";

function App() {
  return (
    <div className="App">
    <Topbar/>
    <Home/>
    </div>
  );
}

export default App;
