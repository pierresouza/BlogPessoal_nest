import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class Bcrypt {
  async criptografarSenha(senha: string): Promise<string> {
    let saltos = 10;
    return await bcrypt.hash(senha, saltos);
  }

  async compararSenha(
    senhaBanco: string,
    senhaDigitada: string,
  ): Promise<boolean> {
    return await bcrypt.compare(senhaBanco, senhaDigitada);
  }
}
