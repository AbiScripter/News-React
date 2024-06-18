import { useEffect } from "react";
import "./App.css";

//0ab57087d92b4d4292af2bb48b47bf60
//https://newsapi.org/v2/top-headlines?country=in&apiKey=0ab57087d92b4d4292af2bb48b47bf60
function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?country=in&apiKey=0ab57087d92b4d4292af2bb48b47bf60"
        );
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);
  return <div className="App"></div>;
}

export default App;
