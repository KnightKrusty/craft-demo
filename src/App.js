import './App.css';
import OptimiserProvider from './context';
import Accounts from './components/Accounts.js';
import Transactions from './components/Transactions.js';

import Budgets from './components/Budgets.js';
import Trends from './components/Trends.js';
function App() {
  return (
    <div className="App">
      <OptimiserProvider >
        <Accounts />
        <Transactions/>
        <Budgets/>
        <Trends/>
      </OptimiserProvider>

    </div>
  );
}

export default App;
