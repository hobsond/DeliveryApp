import './App.css';
import Home from './components/home/HomeCont'
import { Provider } from 'react-redux'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div id="bgFilter">
          <Home />
        </div>
      </div>
    </Provider>
  );
}

export default App;
