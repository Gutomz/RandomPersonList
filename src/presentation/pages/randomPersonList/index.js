import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RandomPersonListPageActions } from "../../redux/actions";
import {
  LoadingSelectors,
  RandomPersonListPageSelectors
} from "../../redux/reducers";

export default function RandomPersonListPage() {
  const dispatch = useDispatch();
  const data = useSelector(state => RandomPersonListPageSelectors
    .getRandomPersonsList(state));
  const isLoading = useSelector(state => LoadingSelectors.isLoading(state));

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      await dispatch(RandomPersonListPageActions
        .loadRandomPersonList({ results: 10 }));
    } catch (e) {
      console.log("ERROR: ", e.message);
    }
  }

  return (
    <div>
      <p>
        Random Person List ({data.length})
      </p>
      <ul>
        {data.map((e) => (
          <li key={e.email}>
            {e.name.first}
          </li>
        ))}
      </ul>
      {isLoading 
        ? <progress /> 
        : <button onClick={loadData}>Load +10</button>
      }
    </div>
  );
}
