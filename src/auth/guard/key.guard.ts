import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { validateHeaderValue } from 'http';
import { stringify } from 'querystring';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate( context: ExecutionContext ): boolean {
    const request = context.switchToHttp().getRequest();
    console.log(request)
    return true
  }
}
