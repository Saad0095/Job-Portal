import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { AuthProvider } from "./context/AuthContext";
import Loading from "./components/Loading";
const Home = lazy(() => import("./pages/Home"));
const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
const Apply = lazy(() => import("./pages/Apply"));
const ConfirmedApplication = lazy(() => import("./pages/ConfirmedApplication"));
const PrivateRoute = lazy(() => import("./routes/PrivateRoute"));

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/apply"
            element={
              <PrivateRoute>
                <Apply />
              </PrivateRoute>
            }
          />
          <Route
            path="/confirmedapplication"
            element={<ConfirmedApplication />}
          />
        </Routes>
      </Suspense>
      <Footer />
    </AuthProvider>
  );
}

export default App;
