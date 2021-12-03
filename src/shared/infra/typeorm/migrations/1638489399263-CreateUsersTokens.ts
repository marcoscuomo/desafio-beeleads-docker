import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTokens1638489399263 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: "USERS_TOKENS",
					columns: [
						{
							name: "TOKEN_ID",
							type: "int",
							isPrimary: true
						},
						{
							name: "TOKEN_REFRESH_TOKEN",
							type: "varchar"
						},
						{
							name: "TOKEN_USER_ID",
							type: "int"
						},
						{
							name: "TOKEN_EXPIRES_DATE",
							type: "timestamp"
						},
						{
							name: "TOKEN_CREATED_AT",
							type: "timestamp",
							default: "now()"
						},
						{
							name: "TOKEN_ACTIVE",
							type: "boolean",
							default: true
						},
						{
							name: "TOKEN_DELETED",
							type: "boolean",
							default: false
						}
					],
					foreignKeys: [
						{
							name: "FKUsersTokens",
							referencedTableName: "USER",
							referencedColumnNames: ["USER_ID"],
							columnNames: ["TOKEN_USER_ID"],
							onDelete: "CASCADE",
							onUpdate: "CASCADE"
						}
					]
				}
			)
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("USERS_TOKENS");
	}

}
