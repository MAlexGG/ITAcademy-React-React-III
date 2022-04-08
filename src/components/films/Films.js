import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { CtFilms, CtFilmsCard, CtFilmsCards, TextFilm } from './Films.styled';


export default function Films({ ship }) {
    
    const [film, setFilm] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const films = ship.films;
            let data = await Promise.all(films.map(async (el) => {
                const f = await axios.get(el);
                return f.data;
            }))
            setFilm(data);
        };
        getData();
    }, [ship.films])
    

  return (
      <>
          {
              film.length > 0 ?
                <CtFilms>
                    <p>Films:</p>
                      <CtFilmsCards>
                          {
                              film.map((film, index) => (
                                <CtFilmsCard key={index}>
                                    <p>{film.title}</p>
                                    <TextFilm>Director: {film.director}</TextFilm>
                                    <TextFilm>Producer: {film.producer}</TextFilm>
                                    <TextFilm>Date of release: {film.release_date}</TextFilm>
                                    <TextFilm>{film.opening_crawl}</TextFilm>  
                                </CtFilmsCard>
                              ))
                          }   
                    </CtFilmsCards>      
                </CtFilms> :
                <div></div>  
          }
           
        
      
      </>
  )
}

 