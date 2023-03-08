import React from "react";
import ReactDOM from "react-dom";
import { QrReader } from "react-qr-reader";

import "./index.css";

function App() {
  const [readCode, setReadCode] = React.useState<string>("");
  const handleScan = (data: string | null) => {
    setReadCode(data);
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  return (
    <div style={{ maxWidth: "300px" }}>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
        constraints={{
          facingMode: "environment",
        }}
      />
      <code style={{ color: "red" }}>Code: {readCode}</code>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
("");
