import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable() 
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secret-key',
    }); 
  }
 
  // برگرداندن کل موجودیت کاربر از دیتابیس
async validate(payload: any) {
  const user = await this.prisma.user.findUnique({
    where: { id: payload.sub },
    include: {
      parent: true, // ⬅️ این خط رو اضافه کن
    },
  });

  if (!user) {
    throw new UnauthorizedException('کاربر یافت نشد');
  }

  return {
    userId: user.id,
    username: user.username,
    role: user.role,
    parentId: user.parent?.id, // ⬅️ حالا این مقدار میاد
  };
}
}