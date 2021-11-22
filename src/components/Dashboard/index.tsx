import {
  Card, CardContent, CardMedia, Typography
} from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';
import { loadHeroesList } from '../../redux/actions/heroesActionsCreators';
import { Heroe, HeroeState, RootState } from '../../types/app.types';
import './styles.scss';

const mapStateToProps = (state: RootState) => ({
  heroes: state.heroes
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
  actions:
    bindActionCreators({
      loadHeroesList
    }, dispatch)
});

type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

type Props = {heroes: HeroeState} & mapDispatchToPropsType

const Dashboard:React.FC<Props> = ({ heroes, actions }) => {
  useEffect(() => {
    if (!heroes.heroesList) {
      actions.loadHeroesList();
    }
  }, []);

  return (
    <main>
      {heroes.heroeError && (<p className="message--error">{heroes.heroeError.message}</p>)}
      {heroes.heroesList && (
        <article>
          <Box className="heroes-list__title">
            <Typography variant="h2" component="div" gutterBottom data-test-id="dashboard__title">
              Heroes dashboard
            </Typography>
          </Box>
          <div className="heroes-list__container">
            {heroes.heroesList?.map((heroItem: Heroe):React.ReactElement => (
              <Card key={heroItem.id} className="heroe-card">
                <Link to={`/detail/${heroItem.id}`} className="heroe-card__link">
                  <CardMedia
                    component="img"
                    width="250"
                    height="180"
                    image={`${heroItem.thumbnail.path}.${heroItem.thumbnail.extension}`}
                    alt={heroItem.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className="heroe-card__title" data-test-id={`hero-card__title-${heroItem.id}`}>
                      {heroItem.name}
                    </Typography>
                  </CardContent>
                </Link>

              </Card>

            ))}
          </div>
        </article>
      )}
    </main>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
