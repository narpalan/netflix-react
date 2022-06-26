// Libs and externals
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '@mui/material';

// Components
import Header from '../../components/header/header';
import ShowsList from '../../components/shows-list/shows-list';

// Utilities
import { showsActions } from '../../store/shows/shows.slice';
import { listSelector, myListSelector } from '../../store/shows/shows.selector';

export default function Shows() {
  const dispatch = useDispatch();

  const list = useSelector(listSelector);
  const myList = useSelector(myListSelector);
  const movies = list.MOVIE;
  const tvShows = list.TV_SHOWS;

  useEffect(
    () => {
      dispatch(showsActions.getList());
      dispatch(showsActions.getMyList());
    },
    [],
  );

  return (
    <>
      <Header />
      <Container>
        <ShowsList
          autoplay
          width="95%"
          height="560px"
          arrows={false}
          shows={myList}
          slidesToShow={1}
          autoplaySpeed={2400}
        />
        {myList && <ShowsList shows={myList} title="Minha Lista" />}
        {movies && <ShowsList shows={movies} title="Filmes" />}
        {tvShows && <ShowsList shows={tvShows} title="Séries" />}
      </Container>
    </>
  );
}
