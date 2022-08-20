import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import LogIn from './pages/LogIn/LogIn';
import SignUp from './pages/LogIn/SignUp';
import RequireAuth from "./pages/LogIn/RequireAuth";
import Services from './pages/Services/Services';
import Footer from './pages/Shared/Footer';
import Navbar from './pages/Shared/Navbar';
import PageNotFound from './pages/PageNotFound/PageNotFound';

function App() {
  return (
    <div className="max-w-8xl mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/services"
          element={
            <RequireAuth>
              <Services />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
