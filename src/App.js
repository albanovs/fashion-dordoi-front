import { SideBar } from "./page/home-pages";
import LoginPage from "./page/login/login-page";
import { Routes, Route, Navigate } from "react-router-dom";
import WhatsappSlot from "./page/slots/whatsapp-slot";
import InstagramSlot from "./page/slots/instagram-slot";
import TelegramSlot from "./page/slots/telegram-slot";
import EditSlots from "./page/edit-slot";
import EditableTable from "./components/edit-table/tableEdit";
import EditableTg from "./components/edit-table/tableeditTg";
import EditableWA from "./components/edit-table/tableEditWA";

function App() {
  const token = localStorage.getItem("token");

  const PrivateRoute = ({ element }) => {
    return token ? element : <Navigate to="/auth" replace />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/home-page" element={<SideBar />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/whatsapp" element={<WhatsappSlot />} />
        <Route path="/" element={<InstagramSlot />} />
        <Route path="/telegram" element={<TelegramSlot />} />
        <Route path="/settings" element={<PrivateRoute element={<EditSlots />} />} />
        <Route path="/settings/edit-instagram" element={<PrivateRoute element={<EditableTable />} />} />
        <Route path="/settings/edit-telegram" element={<PrivateRoute element={<EditableTg />} />} />
        <Route path="/settings/edit-whatsapp" element={<PrivateRoute element={<EditableWA />} />} />
      </Routes>
    </div>
  );
}

export default App;