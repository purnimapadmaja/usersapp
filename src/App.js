import "./App.css";
import UsersList from "./Componets/UsersList";
import AddUsersData from "./Componets/AddUsersData";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-users-data" element={<AddUsersData />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
