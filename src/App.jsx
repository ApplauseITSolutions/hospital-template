import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import FloatingElements from './components/layout/FloatingElements';
import AppRoutes from './routes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Global sticky header */}
        <Header />
        
        {/* Main page routes content */}
        <main className="flex-grow">
          <AppRoutes />
        </main>
        
        {/* Global footer */}
        <Footer />
        
        {/* Floating whatsapp, call, scroll-to-top actions */}
        <FloatingElements />
      </div>
    </Router>
  );
}

export default App;
