import React from "react";
import "./movies.css";
import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { shanta } from "../../context/Context";
export default function Movies() {
  const [dataApiMovies, setdataApiMovies] = useState();

  let { search } = useContext(shanta);

  let show = search ? "search" : "discover";

  async function getDataApi() {
    let { data } = await axios.get(
      ` https://api.themoviedb.org/3/${show}/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatratehttps://api.themoviedb.org/3/discover/movie?api_key=5fbe34b0d2f3eb5e0a8225d88a6cf2c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,
      {
        params: {
          query: search,
        },
      }
    );

    setdataApiMovies(data.results);
  }

  useEffect(() => {
    setTimeout(() => {
      getDataApi();
    }, 3000);
  }, [search]);

  return (
    <>
      {dataApiMovies ? (
        <div className="container-fluid p-4">
          <div className="row mt-5">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="text-center text-info ">
                <h1>trending</h1>
                <h1>movie</h1>
                <h1>to watch</h1>
              </div>
            </div>

            {dataApiMovies.map((movie, index) => {
              return (
                <div className="col-lg-3 col-md-4 col-sm-6 " key={index}>
                  <div className="mb-4 position-relative name   ">
                    <img
                      src={
                        `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                      }
                      className="w-100 poster"
                      alt=""
                    />

                    <div className="layer  ">
                      <div className="title text-center m-5 py-4  text-white  ">
                        <h1>{movie.title}</h1>
                        <h1>vote : {movie.vote_average}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className=" text-center mt-5 ">
          <i className="fa-solid fa-spinner fa-spin fa-9x text-white"></i>
        </div>
      )}
    </>
  );
}
