import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('debts')
class Debt {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  id_user: number;

  @Column()
  debt_reason: string;

  @Column()
  debt_date: Date;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Debt;
