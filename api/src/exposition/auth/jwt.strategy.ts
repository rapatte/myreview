import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import jwtSecret from '../../config/jwtSecret';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpriration: false,
      secretOrKey: jwtSecret().jwtSecret,
    });
  }
  async validate(payload: any) {
    return {
      id: payload.sub,
      username: payload.username,
    };
  }
}
