import { ConsoleLoggerMiddleware } from './console-logger.middleware';

describe('ConsoleLoggerMiddleware', () => {
  it('should be defined', () => {
    expect(new ConsoleLoggerMiddleware()).toBeDefined();
  });
});
