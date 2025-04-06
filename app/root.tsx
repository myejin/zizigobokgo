import "./root.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./routes/main";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/invitations/:invitationKey" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
