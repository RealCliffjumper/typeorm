import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BeanStalk } from "./BeanStalk";

@Entity()
export class Bean{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    beanColour: string

    @Column()
    beanQty: number

    @OneToMany(() => BeanStalk, (beanStalk) => beanStalk.bean, {
        cascade:true,
    })
    beanStalk: BeanStalk
}
