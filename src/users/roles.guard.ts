// import { User } from './user.entity';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Role } from './entities/role.enum';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // true = has access or false = no access
    // return true;

    // what is the required role?
    const requireRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    // const { user } = context.switchToHttp().getRequest();

    // for Checking:
    const user = {
      name: 'Louis',
      roles: [Role.DATA_INPUT],
    };

    console.log('--->', requireRoles);

    if (!requireRoles) {
      return true;
    }

    // Does the current user making the request have those required role?
    return requireRoles.some((role) => user.roles.includes(role));
  }
}
