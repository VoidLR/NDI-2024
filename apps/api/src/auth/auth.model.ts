import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDto {

  @ApiProperty({
    type: 'string',
    description: 'The username of the user'
  })
  username: string;

  @ApiProperty({
    type: 'string',
    description: 'The password of the user'
  })
  password: string;
}
