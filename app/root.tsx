import { Routes, Route } from "react-router-dom";
import Main from "./routes/main";
import "./root.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

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
