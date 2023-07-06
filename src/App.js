import './App.css';
import AddExpense from './components/AddExpense';
import Buget from './components/Buget';
import Expenses from './components/Expenses';
import Remaining from './components/Remaining';
import Spent from './components/Spent';

function App() {
  return (
    <div className='App'>
      <div className='container mt-2 '>
        <h1>My buget planner</h1>
        <div className='row d-flex  justify-content-between gap-4'>
          <Buget />
          <Remaining />
          <Spent />
        </div>
        <Expenses />
        <AddExpense />
      </div>
    </div>
  );
}

export default App;
