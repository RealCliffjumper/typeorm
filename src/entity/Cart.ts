import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Cart {

    @PrimaryGeneratedColumn()
    id: number

    @Column("text", { array: true })
    items: string[];
}
