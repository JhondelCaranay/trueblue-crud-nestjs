import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  async create(createProductDto: CreateProductDto) {
    return await this.prisma.product.create({ data: createProductDto });
  }

  async findAll() {
    return await this.prisma.product.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: number) {
    const isProductExist = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!isProductExist) throw new NotFoundException(`Product id not found!`);

    return await this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const isProductExist = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!isProductExist) throw new NotFoundException(`Product id not found!`);

    return await this.prisma.product.update({
      where: { id },
      data: updateProductDto,
    });
  }

  async remove(id: number) {
    const isProductExist = await this.prisma.product.findUnique({
      where: { id },
    });

    if (!isProductExist) throw new NotFoundException(`Product id not found!`);

    return await this.prisma.product.delete({ where: { id } });
  }
}
