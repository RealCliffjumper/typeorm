import { MigrationInterface, QueryRunner } from "typeorm"

export class PostRefactoring1703074776314 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" 
            RENAME COLUMN "lastName" TO "last_name",
            ALTER TABLE "user"
            RENAME COLUMN "firstName" TO "first_name"`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "user" 
            RENAME COLUMN "last_name" TO "lastName",

            ALTER TABLE "user"
            RENAME COLUMN "first_name" TO "last_Name";`,
        )
    }
}
