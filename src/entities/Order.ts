import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  eventId!: string;

  @Column()
  userId!: string;

  @Column()
  quantity!: number;

  @Column({ default: "confirmed" })
  status!: string;

  @CreateDateColumn()
  createdAt!: Date;
}
