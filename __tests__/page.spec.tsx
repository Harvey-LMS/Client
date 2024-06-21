// import {
//   fireEvent,
//   getByText,
//   render,
//   screen,
//   waitFor,
// } from "@testing-library/react";
// import Page from "@/app/(auth)/register/page";
// import "@testing-library/jest-dom";
// import React from "react";



// const setup  = () => {
//   const utils = render(<Page />);


//   const input_username = screen.getByLabelText("Tên đăng nhập");
//   const input_email = screen.getByLabelText("Email");
//   const input_password = screen.getByLabelText("Mật khẩu");
//   const input_confirmPassword = screen.getByLabelText("Nhập lại mật khẩu");
//   const button = screen.getAllByRole("button")[3];


//   return {
//     input_username,
//     input_email,
//     input_password,
//     input_confirmPassword,
//     button,
//     ...utils,
//   };
// }



// describe("Page Component Tests", () => {
//   it("username is already", async () => {
    
//     const { input_username,
//       input_email,
//       input_password,
//       input_confirmPassword,
//       button } = setup();
//     fireEvent.change(input_username, { target: { value: 'dieglevel' } });
    

//     await (()=> {
//       fireEvent.blur(input_username);
//       expect(screen.getByText("Tên đăng nhập đã tồn tại")).toBeInTheDocument();
//     })
//   })})

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import "@testing-library/jest-dom";
import Register from '@/app/(auth)/register/page';

// Mock useRouter
jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'), // If you need actual implementations from next/navigation
  useRouter: () => ({
    pathname: '/mock-path', // Mock pathname or any other property/method your component uses
    query: {}, // Mock query parameters if needed
    push: jest.fn(), // Mock push method if your component uses it
    // Add other properties or methods as needed by your component
  }),
  useSearchParams: () => jest.fn(),
}));

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ username: 'existingUser', gmail: 'existing@gmail.com' }]),
  })
) as jest.Mock;

describe('Register Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('displays error when username already exists', async () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText('Tên đăng nhập');
    const submitButton = screen.getAllByRole("button")[2];

    fireEvent.change(usernameInput, { target: { value: 'existingUser' } });
    fireEvent.blur(usernameInput);

    // Wait for fetch call to complete

    const api_Info_User = `https://66656af6d122c2868e409b34.mockapi.io/user`
    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(api_Info_User);
    });

    // Check for the error message
    const errorMessage = await screen.findByText('Tên đăng nhập đã tồn tại');
    expect(errorMessage).toBeInTheDocument();
  });
});
