import './App.css';
import Home from './components/home/HomeCont'
import {Provider} from 'react-redux'

function App() {
  return (
    <Provider>
      <div className="App">
        <div id="bgFilter">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
