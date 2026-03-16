import {
  Body,
  Controller,
  Get,
  Headers,
  Ip,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Post()
  public createUser(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: string,
  ) {
    console.log(request);
    console.log(headers);
    console.log(ip);

    return 'You send post request to users endpoint';
  }

  @Get(`/:id{/optional}`)
  public getUser(
    @Param() param: { id: string; optional?: string },
    @Query() query: Record<string, string>,
  ) {
    console.log(param);
    console.log(query);
  }
}
