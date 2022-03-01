import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationDto {
  @ApiPropertyOptional({ default: 1 })
  readonly page: number = 1;

  @ApiPropertyOptional({ default: 10 })
  readonly limit: number = 10;
}

export class GetManyResponse<Entity> {
  readonly items: Entity[];

  @ApiProperty({ example: 1 })
  readonly currentPage: number;
  @ApiProperty({ example: 20 })
  readonly totalItem: number;
  @ApiProperty({ example: 10 })
  readonly itemPerPage: number;
  @ApiProperty({ example: 10 })
  readonly itemCount: number;
  @ApiProperty({ example: 2 })
  readonly totalPage: number;
}

// eslint-disable-next-line @typescript-eslint/ban-types
type Entity = Function;

export function getManyResponseFor(type: Entity): typeof GetManyResponse {
  class GetManyResponseForEntity<Entity> extends GetManyResponse<Entity> {
    @ApiProperty({ type, isArray: true })
    public items: Entity[];
  }

  Object.defineProperty(GetManyResponseForEntity, 'name', {
    value: `GetManyResponseFor${type.name}`,
  });

  return GetManyResponseForEntity;
}
