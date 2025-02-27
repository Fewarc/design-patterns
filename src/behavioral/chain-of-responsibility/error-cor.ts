interface AppError {
  message: string;
}

export class ApiError implements AppError {
  constructor(errorMessage: string) {
    this.message = errorMessage;
  }

  message: string;
}

export class AuthError implements AppError {
  constructor(errorMessage: string) {
    this.message = errorMessage;
  }

  message: string;
}

export class UIError implements AppError {
  constructor(errorMessage: string) {
    this.message = errorMessage;
  }

  message: string;
}

interface Handler<T> {
  setNext(handler: Handler<T>): void;
  handle(request: T): string;
}

abstract class ErrorHandler implements Handler<AppError> {
  next: ErrorHandler | null = null;

  setNext(handler: ErrorHandler): void {
    this.next = handler;
  }

  abstract handle(error: AppError): string;
}

export class ApiErrorHandler extends ErrorHandler {
  handle(error: AppError): string {
    if (error instanceof ApiError) {
      return "ApiError: " + error.message;
    } else return this.next?.handle(error) ?? "Couldn't parse error";
  }
}

export class AuthErrorHandler extends ErrorHandler {
  handle(error: AppError): string {
    if (error instanceof AuthError) {
      return "AuthError: " + error.message;
    } else return this.next?.handle(error) ?? "Couldn't parse error";
  }
}

export class UIErrorHandler extends ErrorHandler {
  handle(error: AppError): string {
    if (error instanceof UIError) {
      return "UIError: " + error.message;
    } else return this.next?.handle(error) ?? "Couldn't parse error";
  }
}
