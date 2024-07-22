import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'f8330ca82d8a836ed35413f8098b94262ee7c8579087e9d7ec32931f51ee8d75', // Usa la misma clave secreta que en el módulo
    });
  }

  async validate(payload: any) {
    return { username: payload.username };
  }
}