/** @jest-environment jsdom */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('render first time counter ', () => {
  render(<Counter />);
  const count = screen.getByText('0');
  expect(count).toBeInTheDocument();
});

// validar que el usuario ingreso el email.
// al poner un string que no es de tipo email en el input de email
// que el formulario muestre el texto: "email no valido"

// validar que el usuario ingrese todos los datos.
// al hacer submit que el formulario muestre el texto: "todos los datos son requeridos"

test('test first click on counter ', () => {
  const { container } = render(<Counter />);
  const button = screen.getByTestId("plus");
  // simula un click en el boton
  fireEvent.click(button);
  const count = screen.getByTestId('countId');
  expect(count).toBeInTheDocument();
});

test('show title', () => {
  render(<Counter/>)
  const title = screen.getByText('This is a counter:')
  expect(title).toBeInTheDocument();
})
