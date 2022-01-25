import './App.css';
import axios from 'axios';
import { useState } from 'react';
import Card from "./components/Card";

function App() {

  const [data, setData] = useState([])

  const getNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=b4fc68bb4263442e9ce0b8328029f500")
      .then((response) => {
        // console.log(response);
        setData(response.data.articles)
      })
  }
  return (
    <>
          {/* <Card/> */}

      <div className="container my-3">
        <button className='btn btn-primary' onClick={getNews}>Fetch News</button>
      </div>

      <div className='container'>
        <div className='row'>
          {
            data.map((value) => {
              return (
                <div className='col-3'>
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} class="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main News</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  );
}

export default App;
