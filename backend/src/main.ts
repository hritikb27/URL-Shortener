import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, //included origin as true
    credentials: true, //included credentials as true
  });
  app.use(
    session({
      secret: 'this is a secret',
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 3600000, httpOnly: false },
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(8080);
}
bootstrap();
