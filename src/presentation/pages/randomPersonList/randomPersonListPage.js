import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import RandomPersonItem from "../../components/randomPersonItem";
import { RandomPersonListPageActions } from "../../redux/actions";
import {
  LoadingSelectors,
  RandomPersonListPageSelectors
} from "../../redux/reducers";
import './randomPersonListPage.css';


export default function RandomPersonListPage() {
  const dispatch = useDispatch();
  const data = useSelector(RandomPersonListPageSelectors.getRandomPersonsList);
  const isLoading = useSelector(LoadingSelectors.isLoading);

  const [error, setError] = useState("");

  useEffect(() => {
    if(data.length === 0) {
      loadData();
    }
  }, []);

  const loadData = async () => {
    try {
      await dispatch(RandomPersonListPageActions
        .loadRandomPersonList({ results: 10 }));
    } catch (e) {
      setError(e.message);
    }
  }

  const refreshPage = () => {
    window.location.reload(false);
  }

  let description = (() => {
    let length = data.length;
    if (length === 0) return "Empty List";

    return `Showing ${length} Random ${length === 1 ? "Person" : "People"}`;
  })();

  let hasError = error !== "";
  return (
    <div className="main">
      <h1>
        Random Person List
      </h1>
      <h2 className={hasError ? "error" : ""}>
        {hasError ? error : description}
      </h2>
      {hasError ?
        <div className="extension">
          <button onClick={refreshPage}>Refresh Page</button>
        </div>
      : (
        <>
          <ul id="random-person">
            {data.map((e) => (<RandomPersonItem key={e.login.uuid} person={e} />))}
          </ul>
          <div className="extension">
            {isLoading 
              ? <progress />
              : <button onClick={loadData}>Load More</button>
            }
          </div>
        </>
      )}
    </div>
  );
}
