import { ApiProperty } from '@nestjs/swagger';

export class CustomerInputDto {
  @ApiProperty({
    description: 'Image of the customer',
    example: 'base64...',
  })
  image: string;
  @ApiProperty({
    description: 'Name of the customer',
    example: 'John Doe',
  })
  name: string;
  @ApiProperty({
    description: 'Email of the customer',
    example: 'john@email.com',
  })
  email: string;
  @ApiProperty({
    description: 'Password of the customer',
    example: '123456',
  })
  password: string;
}

export class CustomerOutputDto {
  @ApiProperty({
    description: 'Id of the customer',
    example: 'uuid',
  })
  id?: string;
  @ApiProperty({
    description: 'Image of the customer',
    example: 'base64...',
  })
  image: string;
  @ApiProperty({
    description: 'Name of the customer',
    example: 'John Doe',
  })
  name: string;
  @ApiProperty({
    description: 'Email of the customer',
    example: 'john@email.com',
  })
  email: string;
}
