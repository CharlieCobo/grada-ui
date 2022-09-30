import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '../src/components/Button';

const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
      }}
    >
      <Button label="Hey primary button" />
      <Button label="Hey primary mini-button" small />
      <Button label="Hey variant button" variant />
      <Button label="Hey variant mini-button" variant small />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
