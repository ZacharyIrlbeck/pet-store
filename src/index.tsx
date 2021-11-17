import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignInPage from './components/LoginInPage'
import PetMarketplace from './components/PetMarkteplace'
import PetInfoPage from './pages/PetInfoPage'
import PetProvider from './context/PetContext'
import AuthProvider from './context/AuthContext';
import RequireAuth from './components/RequireAuth'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <PetProvider >
      <Routes>
        <Route path="/" element={<App />} >
          <Route path="login" element={<SignInPage />} />
          <Route path="market" element={<PetMarketplace />} />

          <Route 
            path="/test-auth"
            element={
              <RequireAuth>
                <PetMarketplace />
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
