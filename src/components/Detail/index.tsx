import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Apps from '@mui/icons-material/Apps';
import LibraryBooks from '@mui/icons-material/LibraryBooks';
import MenuBook from '@mui/icons-material/MenuBook';
import Search from '@mui/icons-material/Search';
import CircularProgress from '@mui/material/CircularProgress';
import { loadHeroeDetail } from '../../redux/actions/heroesActionsCreators';
import './styles.scss';
import { HeroeState, RootState } from '../../types/app.types';

const Detail: React.FC = () => {
  const { id } = useParams();
  const dispatch: Dispatch = useDispatch();
  const heroes: HeroeState = useSelector((state: RootState) => state.heroes);
  const isLoading: boolean = Number(id) !== heroes?.heroeDetail?.id;
  useEffect(() => {
    if (id && Number(id) !== heroes?.heroeDetail?.id) {
      loadHeroeDetail(id, dispatch);
    }
  }, []);

  const clickHandler = (url: string): void => {
    window.open(url, '_blank')?.focus();
  };

  const getIconFromType = (inputType: string): React.ReactFragment => {
    switch (inputType) {
      case 'detail':
        return <Search />;
      case 'comiclink':
        return <MenuBook />;
      case 'wiki':
        return <LibraryBooks />;
      default:
        return <Apps />;
    }
  };
  return (
    <main className="heroe-detail__container">
      {heroes.heroeError && (<p className="message--error">{heroes.heroeError.message}</p>)}
      {isLoading && <CircularProgress />}
      {heroes.heroeDetail && !isLoading && (
        <>
          <Box>
            <Typography
              variant="h3"
              component="div"
              gutterBottom
              className="hero-detail__title"
              data-test-id="hero-detail__title"
            >
              {heroes.heroeDetail.name}

            </Typography>
          </Box>
          <div className="heroe-detail__item">
            <img src={`${heroes.heroeDetail.thumbnail.path}.${heroes.heroeDetail.thumbnail.extension}`} alt={heroes.heroeDetail.name} className="heroe-detail__image" />
            <Box className="heroe-detail__description-container">
              <Typography variant="h6" component="div" gutterBottom className="heroe-detail__description-text">{heroes.heroeDetail.description === '' ? 'Description no available' : heroes.heroeDetail.description}</Typography>
              <Typography component="div" gutterBottom className="heroe-detail__date">
                Last modified:
                {' '}
                {(new Date(heroes.heroeDetail?.modified)).toDateString()}
              </Typography>
              <Typography component="div" className="heroe-detail__link-container">
                Resources
                {heroes.heroeDetail?.urls.map(
                  (url: { url: string, type: string }) => <Button key={Math.random()} variant="contained" onClick={() => clickHandler(url.url)} className="heroe-detail__button-item" endIcon={getIconFromType(url.type)}>{url.type}</Button>
                )}
              </Typography>
            </Box>
          </div>
        </>
      )}
    </main>
  );
};

export default Detail;
