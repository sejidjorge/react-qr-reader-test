import React from 'react';
import ReactDOM from 'react-dom';
import { QrReader } from 'react-qr-reader';

import './index.css';

function App() {
  const handleScan = (data: string | null) => {
    alert(data);
  }

  const handleError = (err: any) => {
    console.error(err);
  }

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
        facingMode="environment"
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));''