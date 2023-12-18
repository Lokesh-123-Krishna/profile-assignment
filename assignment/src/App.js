import './App.css';
import {Login} from "./login/Login";
import {
    BrowserRouter, Route, Routes,
} from "react-router-dom";
import {UserDetails} from "./user-details/UserDetails";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<Login/>}/>
                <Route path={'/user-details'} element={<UserDetails/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
