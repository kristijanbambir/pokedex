import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Subheader from 'material-ui/Subheader';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table';

const Stat = (props) => (
  <span>
    <Subheader style={{ paddingLeft: 0 }}>
      {props.name}
    </Subheader>
    <div style={{ color: '#000' }}>
      {props.value}
    </div>
  </span>
);

const columnStyle = {
  paddingLeft: '5px',
  paddingRight: '5px'
};

const PokemonStats = (props) => (
  <div>
    <Row>
      <Col md={3} sm={6}>
        <Stat name='Weight' value={props.weight} />
      </Col>
      <Col md={3} sm={6}>
        <Stat name='Height' value={props.height} />
      </Col>
      <Col md={3} sm={6}>
        <Stat name='Base experience' value={props.base_experience} />
      </Col>
      <Col md={3} sm={6}>
        <Stat name='Species' value={props.species.name} />
      </Col>
    </Row>
    <Row>
      <Col md={3} sm={6}>
        <Stat name='Forms' value={props.forms.map(form => form.name).join(', ')} />
      </Col>
      <Col md={3} sm={6}>
        <Stat
          name='Abilities'
          value={props.abilities.map(ability => ability.ability.name).join(', ')}
        />
      </Col>
      <Col md={3} sm={6}>
        <Stat
          name='Types'
          value={props.types.map(type => type.type.name).join(', ')}
        />
      </Col>
    </Row>
    <Stat
      name='Moves'
      value={props.moves.map(move => move.move.name).join(', ')}
    />
    <br />
    <Subheader style={{ paddingLeft: 0 }}>
      {'Stats'}
    </Subheader>
    <Table selectable={false}>
      <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
        <TableRow>
          <TableHeaderColumn style={columnStyle} colSpan={2}>{'Stat'}</TableHeaderColumn>
          <TableHeaderColumn style={columnStyle}>{'Effort'}</TableHeaderColumn>
          <TableHeaderColumn style={columnStyle}>{'Base stat'}</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody displayRowCheckbox={false}>
        {props.stats.map(stat => (
          <TableRow key={stat.stat.name}>
            <TableRowColumn style={columnStyle} colSpan={2}>{stat.stat.name.replace('-', ' ')}</TableRowColumn>
            <TableRowColumn style={columnStyle}>{stat.effort}</TableRowColumn>
            <TableRowColumn style={columnStyle}>{stat.base_stat}</TableRowColumn>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default PokemonStats;
