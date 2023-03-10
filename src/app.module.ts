import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConsoleLoggerMiddleware } from './middlewares/console-logger/console-logger.middleware';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UsersModule, AuthModule],
  controllers: [],
})

export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ConsoleLoggerMiddleware).forRoutes("*");
  }
}