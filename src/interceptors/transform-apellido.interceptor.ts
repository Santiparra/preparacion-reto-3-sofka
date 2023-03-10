import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ImplementNullInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next
      .handle()
      .pipe(map(users => {
        if(typeof users.length == 'number')         
            users.forEach((user: { lastName: null; }) => {
                if (!user.lastName) user.lastName = null;
            }); 
        if (!users.lastName) users.lastName = null; 
        return users
       }));
  }
}
