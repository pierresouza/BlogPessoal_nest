import { IsNotEmpty } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tb_postagens' })
export class Postagem {
  @PrimaryGeneratedColumn() // Chave primária auto incremento
  id: number;

  @IsNotEmpty() // Validação para não permitir campo vazio
  @Column({ length: 100, nullable: false }) // Campo com 100 caracteres e não nulo
  titulo: string;

  @IsNotEmpty() // Validação para não permitir campo vazio
  @Column({ length: 1000, nullable: false }) // Campo com 1000 caracteres e não nulo
  texto: string;

  @UpdateDateColumn() // Campo de data de postagem que serão preenchidas automaticamente
  data: Date;
}
