import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { apiStarwars } from '../../services/apiStarwars';
import Header from '../header/Header';
import { BtViewMore, CtStarship, CtStarships } from './Starships.styled';


export default function Starships() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const api = apiStarwars();
  const next = useRef();

  useEffect(() => {
    api.getShips(page).then((res) => {
      setList([...list, res.data.results]);
      next.current = (res.data.next);
    }).catch((error) => error);
  }, [page]);

  console.log(list);
  
  const viewMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      <CtStarships>
        <Header/>
        {
          list.map((item) => (
            item.map((ship, index) => (
              <Link to={`/starship/${index}`} state={{ ship: ship }} key={index}>
              <CtStarship>
                <h3>{ship.name}</h3>
                <p>{ship.model}</p>
              </CtStarship>
            </Link>
            ))
          ))
        }
        <BtViewMore onClick={viewMore}>View More</BtViewMore>
      </CtStarships>

    </>
  )
}