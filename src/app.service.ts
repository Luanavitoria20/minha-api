
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getTasks() {
    return [
      { id: 1, nome: 'Estudar programação', concluida: false },
      { id: 2, nome: 'Criar minha API', concluida: true },
    ];
  }
}
