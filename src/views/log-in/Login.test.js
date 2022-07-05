import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';

import { Login } from './Login';

describe('login form', () => {
  beforeEach(() => {
    act(() => {
      render(
        <MemoryRouter>
          <Login />
        </MemoryRouter>
      );
    });
  })

  test('inputs should be initialy empty', () => {
    expect(screen.getByPlaceholderText('Email').value).toBe('');
    expect(screen.getByPlaceholderText('Password').value).toBe('');
  });

  test('throw an error if not email provided', async () => {
    const handleSubmit = jest.fn();
    // const user = userEvent.setup();

    await fireEvent.change(screen.getByPlaceholderText(/Email/i), '');
    // await userEvent.type(screen.getByPlaceholderText(/Password/i), '1234567890')
    act(() => {
      userEvent.click(screen.getByRole('button', { type: /submit/i }));
      // console.log(screen.getByRole('button', { type: /submit/i }))
    });
    // waitFor(() =>
    //   expect(handleSubmit).toHaveBeenCalledWith({
    //     email: 'john.dee@someemail.com'
    //   }),
    // )
    // await waitFor(() => {
    // userEvent.type(screen.getByPlaceholderText('Email', 'leonsua@gmail.com'));
    // userEvent.click(screen.getByRole('button', {type: /submit/i}));
    expect(screen.queryByText(/Please Provide an Email and Password/i)).toBeInTheDocument();
    // });
  });

  // test('throw an error if not password provided', async () => {
  //   await waitFor(() => {
  //     userEvent.type(screen.getByPlaceholderText('Email', 'leonsua@gmail.com'));
  //     userEvent.type(screen.getByPlaceholderText('Password', ''));
  //     userEvent.click(screen.getByRole('button', {type: 'submit'}));
  //     expect(screen.queryByText('Please Provide an Email and Password')).toBeInTheDocument();
  //   });
  // });
});