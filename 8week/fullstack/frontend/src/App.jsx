import { Outlet, Route, Routes } from 'react-router-dom';
import LangingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './layout/NavBar';
import Footer from './layout/Footer';

function Layout() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <main className="mb-auto w-10/12 max-w-4xl">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LangingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
  );
}

export default App;
