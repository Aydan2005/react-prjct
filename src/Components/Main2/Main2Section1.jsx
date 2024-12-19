// import React from "react";
// import { useParams } from "react-router-dom";
// import { useSelector } from "react-redux";
// import favoriteList from "./Main2Section1.module.css";
// import { useState } from "react";
// const Main2Section1 = () => {
// const { id } = useParams();
// const [back,setBack] = useState("<= Go To Home");
// const savedList = useSelector((state) =>
//   state.favoriteMovies.savedLists.find((list) => list.id === id)
// );
// if (!savedList) {
//   return <div>No list found!</div>;
// }
// return (
//     <div>
//       <a href="/" className={favoriteList.home}>{back}</a>
//       <div className={favoriteList.h1div}>
//         <h1 className={favoriteList.h1}>List Name: {savedList.listName}</h1>
//       </div>
//       <div className={favoriteList.list}>
//         {savedList.movies.map((movie) => (
//           <div key={movie.imdbID} className={favoriteList.listItem}>
//             <h2 className={favoriteList.h2}>{movie.Title}</h2>
//             <button className={favoriteList.button}
//               onClick={() => window.open(`https://www.imdb.com/title/${movie.imdbID}`, '_blank')}
//             >
//               Watch Trailer
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Main2Section1;











import React, { useState } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import favoriteList from "./Main2Section1.module.css";

const Main2Section1 = () => {
  const { id } = useParams();
  const [back] = useState("<= Go To Home");
  const navigate = useNavigate(); // useNavigate hook
  const savedList = useSelector((state) =>
    state.favoriteMovies.savedLists.find((list) => list.id === id)
  );

  const handleHomeRedirect = () => {
    navigate("/"); // Home səhifəsinə yönləndirilir
    window.location.reload(); // Səhifə yenilənir
  };

  if (!savedList) {
    return <div>No list found!</div>;
  }

  return (
    <div>
      <NavLink to="/" onClick={handleHomeRedirect} className={favoriteList.home}>
        {back}
      </NavLink>
      <div className={favoriteList.h1div}>
        <h1 className={favoriteList.h1}>List Name: {savedList.listName}</h1>
      </div>
      <div className={favoriteList.list}>
        {savedList.movies.map((movie) => (
          <div key={movie.imdbID} className={favoriteList.listItem}>
            <h2 className={favoriteList.h2}>{movie.Title}</h2>
            <button
              className={favoriteList.button}
              onClick={() =>
                window.open(`https://www.imdb.com/title/${movie.imdbID}`, "_blank")
              }
            >
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main2Section1;
