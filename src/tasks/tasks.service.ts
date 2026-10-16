
import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}

  async getTasks() {
    return this.prisma.task.findMany({
      orderBy: { id: 'asc' },
    });
  }

  async createTask(nome: string) {
    return this.prisma.task.create({
      data: {
        nome: nome,
      },
    });
  }

  async completeTask(id: number) {
    const tarefa = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!tarefa) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prisma.task.update({
      where: { id },
      data: { concluida: true },
    });
  }

  async deleteTask(id: number) {
    const tarefa = await this.prisma.task.findUnique({
      where: { id },
    });

    if (!tarefa) {
      throw new NotFoundException('Tarefa não encontrada');
    }

    return this.prisma.task.delete({
      where: { id },
    });
  }
}
