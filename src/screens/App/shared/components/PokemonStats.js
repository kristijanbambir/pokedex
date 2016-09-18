import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Stat = (props) => (
  <p>
    <strong>{`${props.name}: `}</strong>
    {props.value}
  </p>
);

const PokemonStats = (props) => (
  <div>
    <Row>
      <Col md={3} sm={6}>
        <Stat name='Weight' value={props.weight} />
      </Col>
      <Col md={3} sm={6}>
        <Stat name='Height' value={props.height} />
      </Col>
    </Row>
  </div>
);

export default PokemonStats;
