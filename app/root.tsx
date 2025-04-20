import "./root.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import NotFound from "./routes/not_found";
import WeddingInvitation from "./routes/wedding_invitation";
import Funeral from "./routes/funeral";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/funerals/:funeralKey" element={<Funeral />} />
          <Route path="/invitations/:invitationKey" element={<WeddingInvitation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
