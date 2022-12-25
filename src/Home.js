import Entity from './components/Entity';
import { useSelector } from 'react-redux';


function Home() {
  const { dependencies, isLoading } = useSelector(state => state.dependency)

  return (
    <div className="Home">
      {dependencies && !isLoading && <>
        <Entity type='accounts' />
        <Entity type='transactions' />
        <Entity type='budgets' />
        <Entity type='trends' />
        <Entity type='tags' />
      </>
      }

    </div>
  );
}

export default Home;
