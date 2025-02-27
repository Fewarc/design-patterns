import {
  ApiError,
  ApiErrorHandler,
  AuthError,
  AuthErrorHandler,
  UIError,
  UIErrorHandler,
} from "../../src/behavioral/chain-of-responsibility/error-cor";

it("parses api error", () => {
  const apiError = new ApiError("error");

  const authErrorHandler = new AuthErrorHandler();
  const uiErrorHandler = new UIErrorHandler();
  const apiErrorHandler = new ApiErrorHandler();

  uiErrorHandler.setNext(apiErrorHandler);
  authErrorHandler.setNext(uiErrorHandler);

  const parsedError = authErrorHandler.handle(apiError);

  expect(parsedError).toBe("ApiError: error");
});

it("parses auth error", () => {
  const apiError = new AuthError("error");

  const uiErrorHandler = new UIErrorHandler();
  const authErrorHandler = new AuthErrorHandler();
  const apiErrorHandler = new ApiErrorHandler();

  authErrorHandler.setNext(apiErrorHandler);
  uiErrorHandler.setNext(authErrorHandler);

  const parsedError = uiErrorHandler.handle(apiError);

  expect(parsedError).toBe("AuthError: error");
});

it("parses ui error", () => {
  const apiError = new UIError("error");

  const authErrorHandler = new AuthErrorHandler();
  const apiErrorHandler = new ApiErrorHandler();
  const uiErrorHandler = new UIErrorHandler();

  apiErrorHandler.setNext(uiErrorHandler);
  authErrorHandler.setNext(apiErrorHandler);

  const parsedError = authErrorHandler.handle(apiError);

  expect(parsedError).toBe("UIError: error");
});
