import { Route, Routes } from "react-router-dom";

import Home from "../../pages/Home";
import NotFound from "../../pages/NotFound";
import Movie from "../../pages/Movie";
import Search from "../../pages/Search";
import MovieDetail from "../../pages/MovieDetail";
import KakaoCallback from "../../pages/KakaoCallback";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie' element={<Movie />} />
        <Route path='/search' element={<Search />} />
        <Route path='/detail:id' element={<MovieDetail />} />
        <Route path='/kakao/callback' element={<KakaoCallback />} />
        <Route path='*' element={<NotFound />} /> {/* 404 페이지 */}
      </Routes>
    </>
  );
};

export default AppRoutes;
