import './App.css';
import QuestionTracker from './components/QuestionTrackerComponent';
import QuestionComponent from './components/QuestionComponent';

function App() {
  return (
    <div className="app">
      <div className="questionComponent">
        <QuestionComponent />
      </div>
      <div className="questionTracker">
        <QuestionTracker />
      </div>
    </div>
  );
}

export default App;
