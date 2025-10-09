import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IssuePage from "./pages/IssuePage";
import VerifyPage from "./pages/VerifyPage";

export default function App(): React.ReactElement {
  return (
    <BrowserRouter>
      <nav className="bg-blue-700 text-white p-4 flex justify-center gap-6">
        <Link to="/" className="hover:underline">Issue</Link>
        <Link to="/verify" className="hover:underline">Verify</Link>
      </nav>
      <Routes>
        <Route path="/" element={<IssuePage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
