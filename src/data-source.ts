import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Bean } from "./entity/Beans"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "asdajYR",
    database: "typeorm_db",
    synchronize: false,
    logging: false,
    entities: [User, Bean],
    migrations: ['src/migration/*.ts'],
    subscribers: [],
})
