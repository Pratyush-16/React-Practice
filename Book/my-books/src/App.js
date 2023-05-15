import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Favourites } from "./Pages/Favourites";
import { Reads } from "./Pages/Reads";
import { Profile } from "./Pages/Profile";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavLink>
        <NavLink to="/"> Home </NavLink> ||
        <NavLink to="/favourites"> Favourite </NavLink> ||
        <NavLink to="/reads"> Reads </NavLink> ||
        <NavLink to="/profile"> Profile </NavLink>
      </NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/reads" element={<Reads />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
