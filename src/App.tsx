import { Route, Routes } from "react-router-dom";
import AppNavBar from "./components/AppNavBar";
import Home from "./Home";
import S3Page from "./pages/S3/S3Page";

export default function App() {
  return (
    <>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/s3" element={<S3Page />} />
      </Routes>
    </>
  );
}
