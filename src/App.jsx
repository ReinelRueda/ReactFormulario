import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Lista from "./componentes/Lista";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Lista />
    </>
  );
}

export default App;
