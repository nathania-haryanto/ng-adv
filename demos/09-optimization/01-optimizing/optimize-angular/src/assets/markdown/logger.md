- Examine ngx-logger config in demos.module.ts

  ```
  LoggerModule.forRoot({
    serverLoggingUrl: 'http://localhost:3000/logs',
    level: NgxLoggerLevel.DEBUG,
    serverLogLevel: NgxLoggerLevel.ERROR
  }),
  ```
