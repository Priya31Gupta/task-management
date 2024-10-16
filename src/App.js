import logo from './logo.svg';
import './App.css';
import TaskList from './Components/taskOverview/TaskOverview';

function App() {
  return (
    <div className="App">
      <div className='App-header'> Task Management </div>
      <TaskList />
    </div>
  );
}

export default App;
