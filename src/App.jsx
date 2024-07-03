import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Realisations } from './components';

const AppContent = () => {
  const location = useLocation();
  const isRealisationsPage = location.pathname === '/realisations';

  return (
    <div className='relative z-0 bg-primary'>
      {!isRealisationsPage && (
        <Hero />
      )}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          
        </div>
      
      <Routes>
        <Route path="/" element={
          <>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </>
        } />
        <Route path="/realisations" element={<Realisations />} />
      </Routes>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;


