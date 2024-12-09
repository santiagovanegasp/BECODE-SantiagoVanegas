// react sin dependencias, directamente del cliente

import React from "https://esm.sh/react@18.2.0";
import ReactDOM from "https://esm.sh/react-dom@18.2.0/client";

const appDomElement = document.getElementById('myh1');

if (appDomElement) {
  const root = ReactDOM.createRoot(appDomElement);
  const button = React.createElement('button', {"id":123}, 'botonreact');

  root.render(button);
} else {
  console.error('El elemento con id "myh1" no se encontró en el DOM.');
}
