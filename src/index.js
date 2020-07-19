import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const root = document.getElementById("root");
//const elemento = React.createElement(componente, propiedades, hijos);
//const elementoSinJSX = React.createElement("h1", { className: "saludo" }, "Hola Mundo");
//const elementoConJSX = <h1 className="saludos">Hola Mundo</h1>;

//ReactDOM.render(elementoConJSX, root);
ReactDOM.render(<App />, root);


