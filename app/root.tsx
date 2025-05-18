import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./root.css";
import CreateWeddingInvitation from "./routes/create_wedding_invitation";
import NotFound from "./routes/not_found";
import ViewFuneral from "./routes/view_funeral";
import ViewWeddingInvitation from "./routes/view_wedding_invitation";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/funeral-demo0" element={<ViewFuneral demoType="0" />} />
          <Route path="/funerals/:funeralKey" element={<ViewFuneral />} />
          <Route path="/wedding-demo0" element={<ViewWeddingInvitation demoType="0" />} />
          <Route path="/wedding-demo1" element={<ViewWeddingInvitation demoType="1" />} />
          <Route path="/wedding-invitations/create" element={<CreateWeddingInvitation />} />
          <Route path="/wedding-invitations/:invitationKey" element={<ViewWeddingInvitation />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}
