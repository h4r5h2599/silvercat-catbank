import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import SignUpLogIn from "./SignUpLogIn";
import { ContextProvider } from "../../MyContext";

afterEach(cleanup);

test("Sign Up: Username too short, no passwords", () => {
  render(
    <ContextProvider
      defaultTheme="dark"
      defaultRoute="Log In / Sign Up"
      forceMobile={false}
      defaultLoggedIn={false}
    >
      <SignUpLogIn defaultType="Sign Up" />
    </ContextProvider>
  );

  // Get all form elements for sign up
  const usernameInput = screen.getByTestId("usernameInput");
  const usernameError = screen.getByTestId("usernameError");
  const passwordInput = screen.getByTestId("passwordInput");
  const passwordError = screen.getByTestId("passwordError");
  const confirmPasswordInput = screen.getByTestId("confirmPasswordInput");
  const confirmPasswordError = screen.getByTestId("confirmPasswordError");
  const submitButton = screen.getByTestId("submitForm");

  // Check all form elements are present
  expect(usernameInput).toBeInTheDocument();
  expect(usernameError).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Check all form element errors are empty
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");

  // Fill in form with short username and no passwords
  fireEvent.change(usernameInput, { target: { value: "A" } });

  // Submit form
  fireEvent.click(submitButton);

  // Check all form element errors are correct
  expect(usernameError).toHaveTextContent(
    "Username must be at least 3 characters."
  );
  expect(passwordError).toHaveTextContent(
    "Password Required. Password must be at least 8 characters. Password must contain 1 lowercase, uppercase, number and special character."
  );
  expect(confirmPasswordError).toHaveTextContent("");
});

test("Sign Up: Username too long, no passwords", () => {
  render(
    <ContextProvider
      defaultTheme="dark"
      defaultRoute="Log In / Sign Up"
      forceMobile={false}
      defaultLoggedIn={false}
    >
      <SignUpLogIn defaultType="Sign Up" />
    </ContextProvider>
  );

  // Get all form elements for sign up
  const usernameInput = screen.getByTestId("usernameInput");
  const usernameError = screen.getByTestId("usernameError");
  const passwordInput = screen.getByTestId("passwordInput");
  const passwordError = screen.getByTestId("passwordError");
  const confirmPasswordInput = screen.getByTestId("confirmPasswordInput");
  const confirmPasswordError = screen.getByTestId("confirmPasswordError");
  const submitButton = screen.getByTestId("submitForm");

  // Check all form elements are present
  expect(usernameInput).toBeInTheDocument();
  expect(usernameError).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Check all form element errors are empty
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");

  // Fill in form with short username and no passwords
  fireEvent.change(usernameInput, {
    target: { value: "ThisUsernameIsMoreThan20CharactersLong" },
  });

  // Submit form
  fireEvent.click(submitButton);

  // Check all form element errors are correct
  expect(usernameError).toHaveTextContent(
    "Username must be at most 20 characters."
  );
  expect(passwordError).toHaveTextContent(
    "Password Required. Password must be at least 8 characters. Password must contain 1 lowercase, uppercase, number and special character."
  );
  expect(confirmPasswordError).toHaveTextContent("");
});

test("Sign Up: Valid username, incorrect password", () => {
  render(
    <ContextProvider
      defaultTheme="dark"
      defaultRoute="Log In / Sign Up"
      forceMobile={false}
      defaultLoggedIn={false}
    >
      <SignUpLogIn defaultType="Sign Up" />
    </ContextProvider>
  );

  // Get all form elements for sign up
  const usernameInput = screen.getByTestId("usernameInput");
  const usernameError = screen.getByTestId("usernameError");
  const passwordInput = screen.getByTestId("passwordInput");
  const passwordError = screen.getByTestId("passwordError");
  const confirmPasswordInput = screen.getByTestId("confirmPasswordInput");
  const confirmPasswordError = screen.getByTestId("confirmPasswordError");
  const submitButton = screen.getByTestId("submitForm");

  // Check all form elements are present
  expect(usernameInput).toBeInTheDocument();
  expect(usernameError).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Check all form element errors are empty
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");

  // Fill in form with short username and no passwords
  fireEvent.change(usernameInput, {
    target: { value: "ValidUsername" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "password" },
  });

  // Submit form
  fireEvent.click(submitButton);

  // Check all form element errors are correct
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent(
    "Password must contain 1 lowercase, uppercase, number and special character."
  );
  expect(confirmPasswordError).toHaveTextContent("Passwords do not match");
});

test("Sign Up: Valid username, valid password, passwords do not match", () => {
  render(
    <ContextProvider
      defaultTheme="dark"
      defaultRoute="Log In / Sign Up"
      forceMobile={false}
      defaultLoggedIn={false}
    >
      <SignUpLogIn defaultType="Sign Up" />
    </ContextProvider>
  );

  // Get all form elements for sign up
  const usernameInput = screen.getByTestId("usernameInput");
  const usernameError = screen.getByTestId("usernameError");
  const passwordInput = screen.getByTestId("passwordInput");
  const passwordError = screen.getByTestId("passwordError");
  const confirmPasswordInput = screen.getByTestId("confirmPasswordInput");
  const confirmPasswordError = screen.getByTestId("confirmPasswordError");
  const submitButton = screen.getByTestId("submitForm");

  // Check all form elements are present
  expect(usernameInput).toBeInTheDocument();
  expect(usernameError).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Check all form element errors are empty
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");

  // Fill in form with short username and no passwords
  fireEvent.change(usernameInput, {
    target: { value: "ValidUsername" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "validPassword1!" },
  });

  // Submit form
  fireEvent.click(submitButton);

  // Check all form element errors are correct
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("Passwords do not match");
});

test("Sign Up: Valid username, valid password, passwords do match", () => {
  render(
    <ContextProvider
      defaultTheme="dark"
      defaultRoute="Log In / Sign Up"
      forceMobile={false}
      defaultLoggedIn={false}
    >
      <SignUpLogIn defaultType="Sign Up" />
    </ContextProvider>
  );

  // Get all form elements for sign up
  const usernameInput = screen.getByTestId("usernameInput");
  const usernameError = screen.getByTestId("usernameError");
  const passwordInput = screen.getByTestId("passwordInput");
  const passwordError = screen.getByTestId("passwordError");
  const confirmPasswordInput = screen.getByTestId("confirmPasswordInput");
  const confirmPasswordError = screen.getByTestId("confirmPasswordError");
  const submitButton = screen.getByTestId("submitForm");

  // Check all form elements are present
  expect(usernameInput).toBeInTheDocument();
  expect(usernameError).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(passwordError).toBeInTheDocument();
  expect(confirmPasswordInput).toBeInTheDocument();
  expect(confirmPasswordError).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Check all form element errors are empty
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");

  // Fill in form with short username and no passwords
  fireEvent.change(usernameInput, {
    target: { value: "ValidUsername" },
  });

  fireEvent.change(passwordInput, {
    target: { value: "validPassword1!" },
  });

  fireEvent.change(confirmPasswordInput, {
    target: { value: "validPassword1!" },
  });

  // Submit form
  fireEvent.click(submitButton);

  // Check all form element errors are correct
  expect(usernameError).toHaveTextContent("");
  expect(passwordError).toHaveTextContent("");
  expect(confirmPasswordError).toHaveTextContent("");
});
