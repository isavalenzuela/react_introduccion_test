/** @jest-environment jsdom */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from './Counter';

test('render first time counter ', () => {
  render(<Counter />);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('0');
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
  expect(count.textContent).toBe('1');
});

test('show title', () => {
  render(<Counter />);
  const title = screen.getByText('This is a counter:');
  expect(title).not.toBeNull();
});

test('test first click on less counter ', () => {
  const { container } = render(<Counter />);
  const button = screen.getByTestId("less");
  // simula un click en el boton
  fireEvent.click(button);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('0');
});

test('test click plus and less in a row ', () => {
  render(<Counter />);
  const plusButton = screen.getByTestId("plus");
  const lessButton = screen.getByTestId("less");
  // simula un click en el boton
  fireEvent.click(plusButton);
  fireEvent.click(lessButton);
  const count = screen.getByTestId('countId');
  expect(count.textContent).toBe('0');
});
