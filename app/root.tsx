import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./root.css";
import CreateWeddingInvitation from "./routes/create_wedding_invitation";
import Funeral from "./routes/funeral";
import NotFound from "./routes/not_found";
import ViewWeddingInvitation from "./routes/view_wedding_invitation";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/funerals/:funeralKey" element={<Funeral />} />
          <Route path="/wedding-invitations/create" element={<CreateWeddingInvitation />} />
          <Route path="/wedding-invitations/:invitationKey" element={<ViewWeddingInvitation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
