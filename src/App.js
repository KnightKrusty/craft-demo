import './App.css';
import OptimiserProvider from './context';
import Accounts from './components/Accounts.js';
import Transactions from './components/Transactions.js';
import Budgets from './components/Budgets.js';
import Trends from './components/Trends.js';
import Entity from './components/Entity';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDependencies } from './redux/actions/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDependencies());
  }, [])
  return (
    <div className="App">
      <OptimiserProvider >
        <Accounts />
        {/* <Entity type='accounts' /> */}
        <Transactions />
        <Budgets />
        <Trends />
      </OptimiserProvider>

    </div>
  );
}

export default App;
