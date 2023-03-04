import { Injectable, NestMiddleware, RequestMethod } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ConsoleLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)

    if (req.method == "PUT") console.log(req.body.uuid)

    next();
  }
}
