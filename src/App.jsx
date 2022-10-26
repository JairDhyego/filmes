import "./app.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/";
import Home from "./pages/home";
import MovieList from "./components/movieList/index";
import MovieDetail from "./pages/movieDetail/index";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetail />} />
        <Route path="movies/:type" element={<MovieList />} />
        <Route path="/*" element={<p>Error Page</p>} />
      </Routes>
    </div>
  );
}

export default App;
