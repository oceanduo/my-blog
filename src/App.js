import Topbar from "./components/topbar/topbar";

import "./app.scss"

import Single from "./pages/single/single";
import Write from "./pages/write/Write";
import Register from "./pages/register/register";
import Settings from "./pages/setting/Setting";
import Login from "./pages/login/login";

function App() {
  return (
    <div className="App">
    <Topbar/>
    <Single/>
    <Write/>
    <Register />
    <Settings/>
    <Login/>
    </div>
  );
}

export default App;
