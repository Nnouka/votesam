import Manifesto from './components/Manifesto';
import WhyVoteSam from './components/WhyVoteSam';
import Countdown from './components/Countdown';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Countdown />
      <Manifesto />
      <WhyVoteSam />
      <Footer />
    </div>
  );
}

export default App;
