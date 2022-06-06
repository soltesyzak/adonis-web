import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public country: string;

  @column()
  public city: string;

  @column()
  public street: string;

  @column()
  public streetNumber: number;

  @column()
  public postalCode: string;

  @column()
  public area: number;

  @column()
  public energyCategory: string;

  @column()
  public description: string;

  @column()
  public type: string;

  @column()
  public numberOfRooms: number;

  @column()
  public isRenovated: boolean;

  @column()
  public value: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
