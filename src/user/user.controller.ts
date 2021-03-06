import { Controller, Get, Render } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Render("user/user-list")
  @Get()
  userList() {
    const users = this.userService.getUsers();
    return { users };
  }
}

/*
๐ก Controller ๋?
 * ํด๋ผ์ด์ธํธ๋ก ๋ถํฐ Request๋ฅผ ๋ฐ๋ ์ญํ ๊ณผ ๋์์ ํด๋ผ์ด์ธํธ์๊ฒ Response๋ฅผ ํ๋ ์ญํ ์ ํ๋ค.

 - UserController ํด๋์ค์์ UserService ํด๋์ค๋ฅผ ์ธ์์ ํ์์ผ๋ก ๋ฐ์ ๋ค, 
 @Get ๋ฐ์ฝ๋ ์ดํฐ๋ฅผ ํตํด์ UserService ํ์ ๋ด์ getUsers()๋ฅผ ํธ์ถํ์ฌ ๋ฐ๊ณ  users์ ๋ด์ ๋ค users๋ฅผ ๋ฆฌํดํ๋ค. @Render ๋ฐ์ฝ๋ ์ดํฐ๋ก user/user-list ๋ฅผ ํ๋ฉด์ ๋์์ค๋ค.
 
๐ก ์ฌ์ฉ๋ ๋ฐ์ฝ๋ ์ดํฐ
@Controller
 : Controller ํด๋์ค๋ฅผ ์ ์ํด ์ค ์ ์๋ ๋ฏ. ์์๋ @Get, @Post, @Put, @Delete ๋ฑ์ HTTP request ๋ฅผ ์ ์ ํด ์ค ์ ์๋ค.

@Render
 : ์ฌ์ฉํ  ํํ๋ฆฟ ์ง์ ํ๊ณ , ๋ผ์ฐํธ ํธ๋ค๋ฌ ๋ฉ์๋์ ๋ฐํ๊ฐ์ ๋ ๋๋ง์ ์ํด ํํ๋ฆฟ์ ์ ๋ฌ.
*/
