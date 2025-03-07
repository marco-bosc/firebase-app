import { useState, useEffect } from "react";
import { auth } from "./auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/auth/login/Login";
import Register from "./components/auth/register/Register";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import UserDashboard from "./components/dashboard/UserDashboard";
import { AuthProvider } from "./contexts/authContext"; // Importa l'AuthProvider
import Dashboard from "./components/dashboard/Dashboard";
import Settings from "./components/dashboard/pages/Settings";
import Overview from "./components/dashboard/pages/Overview";

function App() {
  const [user, setUser] = useState(auth.currentUser);
  const [role, setRole] = useState<"admin" | "user" | null>(null);
  const [loading, setLoading] = useState(true); // 🔹 Aggiunto stato di loading

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        setRole(idTokenResult.claims.admin ? "admin" : "user");
      } else {
        setRole(null);
      }
      setUser(user);
      setLoading(false); // 🔹 Imposta loading a false quando i dati sono stati caricati
    });

    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    await auth.signOut();
    setUser(null);
    setRole(null);
  };

  if (loading) {
    return <div>Caricamento...</div>;
  }

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={
            user ? (
              role === "admin" ? <AdminDashboard onLogout={handleLogout} /> : <UserDashboard onLogout={handleLogout} />
            ) : <Login />
          }/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dash/*" element={<Dashboard />}>
            <Route index element={<Overview />} />
            <Route path="settings" element={<Settings />} />
          </Route>

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
