import React from 'react';
import AppBar from 'material-ui/AppBar';

const App = (props) => (
  <div>
    <AppBar title='Pokédex' style={{ marginBottom: '20px' }} />
    {props.children}
  </div>
);

export default App;
