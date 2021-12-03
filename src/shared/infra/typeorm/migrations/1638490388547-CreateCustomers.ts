import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCustomers1638490388547 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table(
				{
					name: "CUSTOMER",
					columns: [
						{
							name: "CUSTOMER_ID",
							type: "int",
							isPrimary: true
						},
						{
							name: "CUSTOMER_NAME",
							type: "varchar"
						},
						{
							name: "CUSTOMER_EMAIL",
							type: "varchar"
						},
						{
							name: "CUSTOMER_PHONE",
							type: "varchar",
							isNullable: true
						},
						{
							name: "CUSTOMER_BIRTH_DATE",
							type: "date",
							isNullable: true
						},
						{
							name: "CUSTOMER_GENDER",
							type: "char",
							isNullable: true
						},
						{
							name: "CUSTOMER_CREATED_AT",
							type: "timestamp",
							default: "now()"
						},
						{
							name: "CUSTOMER_ACTIVE",
							type: "boolean",
							default: true
						},
						{
							name: "CUSTUMER_DELETED",
							type: "boolean",
							default: false
						}
					]
				}
			)
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable("CUSTOMER");
	}

}
