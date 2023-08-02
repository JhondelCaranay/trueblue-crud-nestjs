import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const isUserEmailExist = await this.prisma.user.findFirst({
      where: { email: createUserDto.email },
    });

    if (isUserEmailExist)
      throw new BadRequestException(`user email is already exist!`);

    return await this.prisma.user.create({ data: createUserDto });
  }

  async findAll() {
    return await this.prisma.user.findMany();
  }

  async findOne(id: number) {
    const isUserExist = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!isUserExist) throw new NotFoundException(`User id not found!`);

    return await this.prisma.user.findUnique({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const isUserExist = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!isUserExist) throw new NotFoundException(`User id not found!`);

    return await this.prisma.user.update({
      where: { id },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    const isUserExist = await this.prisma.user.findUnique({
      where: { id },
    });

    if (!isUserExist) throw new NotFoundException(`User id not found!`);

    return await this.prisma.user.delete({ where: { id } });
  }
}
