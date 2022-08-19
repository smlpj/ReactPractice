import {render} from '@testing-library/react';
import {HelloWorldApp} from '../src/HelloWorldApp'; 

describe("Pruebas en el componente HelloWorldApp", () => {
  test('Debe de retornar el mensaje "Hola mundo"', () => {
     render(<HelloWorldApp />);
  });
});
