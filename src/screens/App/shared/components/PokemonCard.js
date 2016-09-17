import React from 'react';
import {Card, CardActions, CardHeader} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

const PokemonCard = (props) => (
  <Card style={{ marginBottom: '20px' }}>
    <CardHeader title={props.name} />
    <CardActions>
      <FlatButton label='View details' />
      <FlatButton label='Add to list' />
    </CardActions>
  </Card>
);

export default PokemonCard;
