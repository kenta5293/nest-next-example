import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

/*
๐ก Module
 * Module์ @Module์ด๋ผ๋ ๋ฐ์ฝ๋ ์ดํฐ์๊ฒ ์ด๋ธํ์ดํธ ๋ ํด๋์ค๋ก, Nest๊ฐ ์ฑ์ ๊ตฌ์กฐ๋ฅผ ์กฐ์งํ  ์ ์๋ ๋ฉํ๋ฐ์ดํฐ๋ฅผ ์ ๊ณตํด์ค๋ค.

 @Module
 : @Module ๋ฐ์ฝ๋ ์ดํฐ๋ ๊ฐ์ฅ ์๋ซ์ค์ export UserModule์ ๊พธ๋ฉฐ์ค๋ค. ์ฆ, @Module ๋ฐ์ฝ๋ ์ดํฐ๊ฐ UserModule์ ๊พธ๋ฉฐ์ฃผ๊ณ  ์๋ค๊ณ  ๋ณผ ์ ์๋ค.
 
 @Module()์ ์ธ์์์ ๊ฐ๋ ๊ฐ์ฒด
  - providers: Nest์ injector์ ์ํด ์ธ์คํด์คํ ๋๊ณ , ๊ทธ ์ธ์คํด์ค๋ค์ ์ด ๋ชจ๋ ์์์ ์ต์ํ์ผ๋ก ๊ณต์ .
  - controllers: ํด๋น ๋ชจ๋์์ ์ ์๋, ์ธ์คํด์คํ ๋์ด์ผ ํ๋ ์ปจํธ๋กค๋ฌ๋ค์ ๋ชจ์.
  - imports: ์ํฌํธ๋ ๋ชจ๋๋ค์ ๋ฆฌ์คํธ๋ก ์ด ๋ฆฌ์คํธ์ ๋ชจ๋๋ค์ ๋ฐ์ฝ๋ ์ดํฐ์ ์ฌ์ฉ ์ค์ธ ๋ชจ๋์์ ํ์ํ providers๋ฅผ exportํ๊ณ  ์์ด์ผ ํ๋ค.
  - exports: providers์ ํ์ ์งํฉ์ผ๋ก, ๋ฐ์ฝ๋ ์ดํฐ๋ฅผ ์ฌ์ฉ ์ค์ธ ๋ชจ๋์ด ์ ๊ณต๋ฐ์ Provider์ ์ผ๋ถ๋ฅผ ๋ด๋ณด๋ผ ์ ์๋ค.


[์ฐธ๊ณ ]
https://changhoi.github.io/posts/backend/nestjs-quicklearn-03/
*/
