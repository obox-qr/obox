import {
  Body,
  Controller,
  Post,
  Route,
  Tags,
} from "tsoa";
import { injectable } from 'tsyringe';

import { UserService } from './User.service';

@Route('/auth')
@Tags('Auth')
@injectable()
export class UserController extends Controller {
  constructor(private userService: UserService) {
    super();
  }

  @Post('/register')
  async registerUser(@Body() dto: { email: string; password: string }): Promise<string> {
    const { email, password } = dto;

    return await this.userService.createUser(email, password);
  }

  @Post('/login')
  async loginUser(@Body() dto: { email: string; password: string }): Promise<{ token: string }> {
    const { email, password } = dto;

    const token = await this.userService.login(email, password);
    return { token };
  }
}
