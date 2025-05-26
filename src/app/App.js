import Dashboard from "./components/dashboard";
import Login from "./components/login";
import NavBar from "./components/navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/home";
import Notfound from "./components/not-found";
import Edit from "./components/edit";
import Stats from "./components/stats";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <h1>App</h1>
      <Routes>
        <Route path="/dashboard" Component={Dashboard} />
        <Route path="/dashboard/edit" Component={Edit} />
        <Route path="/dashboard" Component={Stats} />
        <Route path="/login" Component={Login} />
        <Route path="/admin" element={<Navigate to="/dashboard" replace />} />
        <Route path="/posts/:postId?" Component={Posts} />
        <Route path="/" Component={Home} />
        <Route path="*" element={<Navigate to={"/404"} replace />} />
        <Route path="/404" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
