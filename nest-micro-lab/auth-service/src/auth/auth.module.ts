import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Permission } from 'src/entities/permission.entity';
import { RefreshToken } from 'src/entities/refresh-token.entity';
import { RolePermission } from 'src/entities/role-permission.entity';
import { Role } from 'src/entities/role.entity';
import { UserRole } from 'src/entities/user-role.entity';
import { User } from 'src/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { DemoController } from './demoController';
import { RolesGuard } from './guards/roles.guard';
import { PermissionsGuard } from './guards/permissions.guard';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      User,
      Role,
      Permission,
      UserRole,
      RolePermission,
      RefreshToken,
    ]),
    JwtModule.register({}),
  ],
  controllers: [AuthController, DemoController],
  providers: [AuthService, JwtStrategy, RolesGuard, PermissionsGuard],
})
export class AuthModule {}
