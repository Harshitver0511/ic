
import './App.css';
import Slider from './components/Slider';

function App() {
  return (
    <>
    <div className='header'>
    </div>
    <div className='event'>
     Event Name
        
    </div>
    <Slider />
    <div className='content'>
      
If the photos are mapping onto the first slide only, there could be an issue with the transform value in the slides container or the way the slides are being structured in the React component. Let's investigate and correct these issues to ensure that each slide displays one image at a time and moves properly when navigating or using autoplay
      </div>
    <div className='footer'>
      </div>
    </>
  );
}

export default App;
