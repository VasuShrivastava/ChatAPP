import './App.css';
import Chat from './ChatArea/Chat.js';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <div className='app_body'>
      <Sidebar />
      <Chat />
      </div>
    </div>
  );
}

export default App;
