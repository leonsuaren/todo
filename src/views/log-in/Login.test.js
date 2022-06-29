import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

import { Login } from './Login';

describe('login form', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );
  })

  test('inputs should be initialy empty', () => {
    expect(screen.getByPlaceholderText('Email').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
  });

  test('throw an error if not email provided', async () => {
    await waitFor(() => {
      userEvent.type(screen.getByPlaceholderText('Email', 'leonsua@gmail.com'));
      userEvent.click(screen.getByRole('button', {type: /submit/i}));
      expect(screen.getByText(/Please Provide an Email and Password/i)).toBeInTheDocument();
    });
  });

  test('throw an error if not password provided', async () => {
    await waitFor(() => {
      userEvent.type(screen.getByPlaceholderText('Email', 'leonsua@gmail.com'));
      userEvent.type(screen.getByPlaceholderText('Password', ''));
      userEvent.click(screen.getByRole('button', {type: /submit/i}));
      expect(screen.queryByText(/Please Provide an Email and Password/i)).toBeInTheDocument();
    });
  });
});