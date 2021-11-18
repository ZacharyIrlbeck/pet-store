import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import LoginPage from './pages/LoginPage'
import PetMarketplace from './components/PetMarkteplace'
import PetInfoPage from './pages/PetInfoPage'
import PetProvider from './context/PetContext'
import AuthProvider from './context/AuthContext';
import RequireAuth from './components/RequireAuth'
import ProfilePage from './pages/ProfilePage'
import CreatePetPage from './pages/CreatePetPage'
import VendorProvider from './context/VendorContext'
import VendorsPage from './pages/VendorsPage'
import VendorPage from './pages/VendorPage'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <PetProvider >
    <VendorProvider>
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="login" element={<LoginPage />} />
          <Route path="market" element={<PetMarketplace />} />
          <Route path="vendor/:vendorId" element={<VendorPage />} />
          <Route path="vendors" element={<VendorsPage />} />

          <Route 
            path="/profile"
            element={
              <RequireAuth>
                <ProfilePage />
              </RequireAuth>
            }
          />

          <Route 
            path="/list"
            element={
              <RequireAuth>
                <CreatePetPage />
              </RequireAuth>
            }
          />

          <Route path="/pets/:petId" element={<PetInfoPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Route>
      </Routes>
      </VendorProvider>
      </PetProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
