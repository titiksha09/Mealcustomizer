import React from "react";
import Home from './screens/Home'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./screens/Login";
//import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Signup from "./screens/Signup";
import Breakfast from "./screens/Breakfast";
import Lunch from "./screens/Lunch";
import EveningSnack from "./screens/EveningSnack";
import Dinner from "./screens/Dinner";
import Profile from "./screens/Profile";
import VideoConferencing from "./screens/VideoConferencing";
import { CartProvider } from "./components/ContextReducer";
function App() {
    return (
       <CartProvider>
        <Router>
            <div>
                <Routes>
                   <Route exact path="/" element= {<Home/>}/>
                   <Route exact path="/login" element= {<Login/>}/>
                   <Route exact path="/createuser" element= {<Signup/>}/>            
                   <Route exact path="/breakfast" element= {<Breakfast/>}/>
                   <Route exact path="/lunch" element= {<Lunch/>}/>
                   <Route exact path="/eveningsnack" element= {<EveningSnack/>}/>
                   <Route exact path="/dinner" element= {<Dinner/>}/>
                   <Route exact path="/profile" element= {<Profile/>}/>
                   <Route exact path="/connectwithexpert" element= {<VideoConferencing/>}/>
                </Routes>
            </div>
        </Router>
        </CartProvider>
    );
}

export default App;