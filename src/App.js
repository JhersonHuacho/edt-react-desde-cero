import React from 'react';
import "./styles/styles.scss";
import Banner from './Banner';
import Formulario from './Formulario';
import CourseGrid from './CourseGrid';

const App = () => (
  <>
    <Banner />
    <Formulario name="EDteam" />
    <CourseGrid />
  </>
)

export default App;

/**
 * Reglas JSX:
 * 1: Toda etiqueta debe cerrarse
 * 2: Los componentes deben devolver un sólo elemento padre
 * 3: Apoyarse de los Fragments cuando necesito devolver 2 elementos
 * 4: Fragment => <> hijos </>
 * 5: img siempre se cierra
 * 6: class => className
 * 7: for => htmlFor
 * https://ux.ed.team/banner.html
 *
 */