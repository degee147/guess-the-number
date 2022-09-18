import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import Config from "./Config";
import Play from "./Play";

describe('App', () => {
  test('Should render without crash', async () => {
    render(<App />);
  });
})
describe('Config', () => {
  test('Should render without crash', async () => {
    render(<Config />);
  });
})
describe('Play', () => {
  test('Should render without crash', async () => {
    render(<Play />);
  });
})


describe('App has Config', () => {

  render(<App />);
  const configHeading = screen.getByText(/Game Config/i);
  expect(configHeading).toBeInTheDocument();
})
