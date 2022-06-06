import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id');
      table.string('country');
      table.string('city');
      table.string('street');
      table.string('postalCode');
      table.float('area');
      table.string('energyCategory');
      table.string('description', 1500);
      table.string('type');
      table.string('numberOfRooms');
      table.boolean('isRenovated');
      table.float('value');
      table.float('maxValue');
      table.float('minValue');

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
