import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from 'src/application/services/auth.service';
import { AuthConfirmInputDto, AuthInputDto } from '../mappers/auth.mapper';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Auth Login' })
  @ApiResponse({
    status: 201,
    description: 'The user has been logged.',
    // type: CustomerOutputDto,
  })
  @Post('signin')
  async signIn(@Body() authRequest: AuthInputDto): Promise<any> {
    return await this.authService.authenticate(
      authRequest.email,
      authRequest.password,
    );
  }

  @ApiOperation({ summary: 'Auth Login' })
  @ApiResponse({
    status: 201,
    description: 'The user has been logged.',
    // type: CustomerOutputDto,
  })
  @Post('confirm')
  async confirm(@Body() authConfirm: AuthConfirmInputDto): Promise<any> {
    return await this.authService.confirmSignUp(
      authConfirm.email,
      authConfirm.code,
    );
  }
}
