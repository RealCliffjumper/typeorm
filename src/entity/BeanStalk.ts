import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Bean } from "./Beans";

@Entity()
export class BeanStalk{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    beansQty: number

    @ManyToOne(() => Bean, (bean) => bean.beanStalk)
    bean: Bean[]
}
