import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';

interface ExceptionResponseObject {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    // Extract the message from the exception response
    let message: string | string[];
    let error: string;

    if (typeof exceptionResponse === 'string') {
      // Simple string response
      message = exceptionResponse;
      error = HttpStatus[status] || 'Error';
    } else if (typeof exceptionResponse === 'object') {
      // Object response (most common case)
      const responseObj = exceptionResponse as ExceptionResponseObject;
      message = responseObj.message || 'An error occurred';
      error = responseObj.error || HttpStatus[status] || 'Error';
    } else {
      message = 'An error occurred';
      error = 'Error';
    }

    // Normalize message to always be an array
    const normalizedMessage = Array.isArray(message) ? message : [message];

    response.status(status).json({
      message: normalizedMessage,
      error,
      code: status,
    });
  }
}
