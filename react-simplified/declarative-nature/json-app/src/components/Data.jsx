import { useState, useEffect } from "react";

import DataDisplay from "./DataDisplay";

export default function App() {
  const [jsonData, setJsonData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setJsonData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="App">
      {jsonData ? <DataDisplay data={jsonData} /> : <div>Loading...</div>}
    </div>
  );
}
