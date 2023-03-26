import {BrowserRouter} from 'react-router-dom';
import {About , Contact , Experience , Feedbacks , Hero , Navbar , Tech , Works , StarsCanvas , Social} from './components';

const App =()=>{
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary overflow-hidden'>
        <div className='bg-hero-pattern bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <Social />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
