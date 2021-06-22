interface ResponseVO {
  statusCode: number;
  body: string;
}

enum StatusCode {
  success = 201,
  error = 500
}

class Result {
  private statusCode: number;
  private code: number;
  private message: string;
  private data?: any;

  constructor(statusCode: number, code: number, message: string, data?: any) {
    this.statusCode = statusCode;
    this.code = code;
    this.message = message;
    this.data = data;
  }

  bodyToString() {
    return {
      statusCode: this.statusCode,
      body: JSON.stringify({
        code: this.code,
        message: this.message,
        data: this.data,
      }),
    };
  }
}

export class MessageUtil {
  static success(data: object): ResponseVO {
    const result = new Result(StatusCode.success, 0, "success", data);

    return result.bodyToString();
  }

  static error(code: number, message: string) {
    const result = new Result(code || StatusCode.error, code, message);
    return result.bodyToString();
  }
}
