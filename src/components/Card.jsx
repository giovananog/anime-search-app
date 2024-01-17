import * as React from 'react';
import { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';

export default function MediaCard(props) {
  const [showInfo, setShowInfo] = useState(false);

  function show () {
    setShowInfo(!showInfo);
  }

  return (
    <div className='single-card'>
    {showInfo ? (
    <Card>
    <CardActionArea>
    <CardContent>
        <Typography gutterBottom component="div" style={{ fontSize: '10px', border: '1px solid black', padding: '10px'} }>
           {props.anime.attributes.description }
        </Typography>
      </CardContent>
      <CardContent>
        <Typography gutterBottom component="div" style={{ fontSize: '15px'} }>
           Average rating: {props.anime.attributes.averageRating }
        </Typography>
        <Typography gutterBottom component="div" style={{ fontSize: '15px'} }>
           Age rating guide: {props.anime.attributes.ageRatingGuide }
        </Typography>
        <Typography gutterBottom component="div" style={{ fontSize: '15px'} }>
           Episodes: {props.anime.attributes.episodeCount }
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={show} size="small" variant="outlined">See Less</Button>
      </CardActions>
    </CardActionArea>
    </Card>
    ) : 
    
    (
    <Card>
    <CardActionArea>
      <CardMedia
        component="img"
        image={props.anime.attributes.posterImage.small}
        alt={props.anime.attributes.titles.en}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
           {props.anime.attributes.titles.en ||props.anime.attributes.titles.en_jp }
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={show} variant="outlined" size="small">See More</Button>
      </CardActions>
    </CardActionArea>
    </Card>
    )
    }
    </div>
  );
}