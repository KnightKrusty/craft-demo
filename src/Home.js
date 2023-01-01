import Entity from "./components/Entity";
import { useSelector } from "react-redux";
import Loader from "./components/common/Loader";
import { useEffect } from "react";
import Error from "./components/common/Error";

function Home() {
  const { isLoading, topo, error } = useSelector((state) => state.dependency);
  useEffect(() => {
    console.log("isLoding Dep ", isLoading);
  }, [isLoading]);

  return (
    <div className="Home">
      {isLoading && <Loader/>}
      {error && <Error error={error}/>}
      {topo && topo.length && !isLoading ? (
        <>
          {topo.map((entity) => (
            <Entity type={entity} key={entity} />
          ))}
        </>
      ): null}
    </div>
  );
}

export default Home;
