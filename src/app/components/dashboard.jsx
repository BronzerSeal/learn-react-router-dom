import { Routes, Route, Link } from "react-router-dom";
import Edit from "./edit";

export default function Dashboard() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/dashboard/edit">Edit</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/dashboard/edit" element={<Edit />} />
      </Routes>
    </div>
  );
}
