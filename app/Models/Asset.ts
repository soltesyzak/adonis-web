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
  public postalCode: string;

  @column()
  public area: number;

  @column()
  public energyCategory: 'A' | 'B' | 'C' | 'D' | 'E';

  @column()
  public descritpion: string;

  @column()
  public type: 'house' | 'apartment';

  @column()
  public numberOfRooms: number;

  @column()
  public isRenovated: boolean;

  @column()
  public value: number;

  @column()
  public maxValue: number;

  @column()
  public minValue: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
