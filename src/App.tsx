import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import JSON from "./Components/JSON/JSON";
import NewTable from "./Components/Table/NewTable";
// import SimpleTable from "./Components/Table/Table";

function App() {
  const [data, setData] = React.useState<{}[]>([]);
  const [count, SetCount] = React.useState<number>(1);
  const [page, setPage] = React.useState<number>(1);

  useEffect(() => {
    /*    if (count === page) {
      return;
    } else { */
    var handle = setInterval(getEmployeesCount, 10000);
    // }
    return () => {
      clearInterval(handle);
    };
  });

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search_by_date?tags=story&page=0")
      .then((res) => res.json())
      .then((result) => {
        const { hits, nbPages } = result;
        setData(hits);
        setPage(nbPages);
      });
  }, []);

  function getEmployeesCount() {
    fetch(
      `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${count}`
    )
      .then((res) => res.json())
      .then((result) => {
        setData(data.concat(result.hits));
        SetCount(count + 1);
        console.log(count);
      });
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewTable data={data} />} />
        <Route path="/post/:postId" element={<JSON rows={data} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
