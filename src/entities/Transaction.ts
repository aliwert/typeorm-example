import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export enum TransactionTypes {
  DEPOSIT = "deposit",
  WITHDRAW = "withdraw",
}

@Entity("transactions")
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "enum",
    enum: TransactionTypes,
  })
  type: String;

  @Column({
    type: "numeric",
  })
  amount: number;
}
