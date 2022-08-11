import { JwtModuleAsyncOptions } from '@nestjs/jwt';
import jwtSecret from './jwtSecret';

export const jwtConfig: JwtModuleAsyncOptions = {
  useFactory: () => {
    return {
      secret: jwtSecret().jwtSecret,
      signOptions: { expiresIn: '120s' },
    };
  },
};
