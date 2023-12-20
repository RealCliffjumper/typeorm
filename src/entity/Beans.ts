import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Bean{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    beanColour: string

    @Column()
    beanQty: number
}
