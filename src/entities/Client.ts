import { Entity, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { Person } from "./utils/Person";

@Entity("client")
export class Client extends Person {
  @Column({
    default: true,
    name: "active",
  })
  is_active: boolean;

  @Column({
    type: "simple-json",
    nullable: true,
  })
  additional_info: {
    age: number;
    hair_color: string;
  };

  @Column({
    type: "simple-array",
    default: [],
  })
  family_names: string[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
