import { ApiProperty } from '@nestjs/swagger';

export class AuthInputDto {
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

export class AuthConfirmInputDto {
  @ApiProperty({
    description: 'Email of the customer',
    example: 'john@email.com',
  })
  email: string;
  @ApiProperty({
    description: 'code of the confirmation',
    example: '123456',
  })
  code: string;
}
