// //CODE TANPA LOGIN TERLEBIH DAHULU


// //Halaman user
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Sidebar from './components/Sidebar';
// import Home from './components/Home';
// import Event from './components/Event';
// import AddEvent from './components/AddEvent';
// import Profile from './components/Profile';
// import FavoriteEvent from './components/FavoriteEvent';
// import Verification from './components/Verification';


// function App() {
//   return (
//     // Halaman user
//     <Router>
//       <Sidebar />
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route exact path="/kegiatan" element={<Event />} />
//           <Route exact path="/tambah-kegiatan" element={<AddEvent />} />
//           <Route exact path="/profile" element={<Profile />} />
//           <Route exact path="/favorite-event" element={<FavoriteEvent />} />
//           <Route exact path="/verifikasi" element={<Verification />} />

//           {/* Tambahkan route lain sesuai kebutuhan */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }



// //Halaman admin
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import AdmVerifikasi from './Admin-page/AdmVerifikasi';
// import AdmSidebar from './Admin-page/AdmSidebar';
// import AdmKelola from './Admin-page/AdmKelola';
// import './index.css'

// function App() {
//   return (
//     <Router>
//       <AdmSidebar />
//       <div className="content">
//         <Routes>
//           <Route exact path="/verifikasi" element={<AdmVerifikasi />} />
//           <Route exact path="/pengelolaan" element={<AdmKelola />} />

//           {/* Tambahkan route lain sesuai kebutuhan */}
//         </Routes>

//       </div>


//     </Router>
//   );
// }


// // Halaman Guest
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import GSidebar from './Guest-Page/GSidebar';
// import GHome from './Guest-Page/GHome';
// import GDetailEvent from './Guest-Page/GDetailEvent';
// import './index.css'

// function App() {
//   return (
//     <Router>
//       <GSidebar />
//       <div className="content">
//         <Routes>
//           <Route exact path="/" element={<GHome />} />
//           <Route exact path="/kegiatan" element={<GDetailEvent />} />

//           {/* Tambahkan route lain sesuai kebutuhan */}
//         </Routes>

//       </div>


//     </Router>
//   );
// }

// export default App;




// Final Code
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Event from './components/Event';
import AddEvent from './components/AddEvent';
import Profile from './components/Profile';
import FavoriteEvent from './components/FavoriteEvent';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Forgetpw from './components/Forgetpw';
import Verification from './components/Verification';
import AdmVerifikasi from './Admin-page/AdmVerifikasi';
import AdmSidebar from './Admin-page/AdmSidebar';
import AdmKelola from './Admin-page/AdmKelola';
import GHome from './Guest-Page/GHome';
import GDetailEvent from './Guest-Page/GDetailEvent';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Status login
  const [userRole, setUserRole] = useState('guest'); // Role pengguna: 'guest', 'user', 'admin'

  // Fungsi untuk login
  const handleLogin = (role) => {
    setIsLoggedIn(true);
    setUserRole(role); // Atur peran pengguna
  };

  // Fungsi untuk logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserRole('guest');
  };

  return (
    <Router>
      {/* Tampilkan Sidebar hanya jika sudah login dan sesuai dengan peran */}
      {isLoggedIn && userRole === 'user' && <Sidebar onLogout={handleLogout} />}
      {isLoggedIn && userRole === 'admin' && <AdmSidebar onLogout={handleLogout} />}

      <div className="content">
        <Routes>
          {/* Rute awal dialihkan ke halaman login */}
          <Route exact path="/" element={<Navigate to="/login" />} />
          <Route exact path="/login" element={<Login onLogin={() => handleLogin('user')} />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/forgetpw" element={<Forgetpw />} />

          {/* Rute untuk pengguna biasa */}
          <Route exact path="/home" element={isLoggedIn && userRole === 'user' ? <Home /> : <Navigate to="/login" />} />
          <Route exact path="/kegiatan" element={isLoggedIn && userRole === 'user' ? <Event /> : <Navigate to="/login" />} />
          <Route exact path="/tambah-kegiatan" element={isLoggedIn && userRole === 'user' ? <AddEvent /> : <Navigate to="/login" />} />
          <Route exact path="/profile" element={isLoggedIn && userRole === 'user' ? <Profile /> : <Navigate to="/login" />} />
          <Route exact path="/favorite-event" element={isLoggedIn && userRole === 'user' ? <FavoriteEvent /> : <Navigate to="/login" />} />
          <Route exact path="/verifikasi" element={isLoggedIn && userRole === 'user' ? <Verification /> : <Navigate to="/login" />} />

          {/* Rute untuk admin */}
          <Route exact path="/adm-verifikasi" element={isLoggedIn && userRole === 'admin' ? <AdmVerifikasi /> : <Navigate to="/login" />} />
          <Route exact path="/pengelolaan" element={isLoggedIn && userRole === 'admin' ? <AdmKelola /> : <Navigate to="/login" />} />

          {/* Rute untuk tamu */}
          <Route exact path="/guest-home" element={userRole === 'guest' ? <GHome /> : <Navigate to="/login" />} />
          <Route exact path="/guest-kegiatan" element={userRole === 'guest' ? <GDetailEvent /> : <Navigate to="/login" />} />

          {/* Tambahkan rute lain sesuai kebutuhan */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
