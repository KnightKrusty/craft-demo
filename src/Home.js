import Entity from './components/Entity';
import { useSelector } from 'react-redux';
import Loader from './components/common/Loader';
import Toast from './components/common/Toast';


function Home() {
  const { isLoading, topo } = useSelector(state => state.dependency);

  return (
    <div className="Home">
      {isLoading && <Loader/>}
      {topo && !isLoading && <>
        {topo.map((entity) => <Entity type={entity} key={entity} />)}
      </>
      }
      {/* <Toast /> */}
    </div>
  );
}

export default Home;
