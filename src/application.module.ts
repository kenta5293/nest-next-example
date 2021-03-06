import { Module } from "@nestjs/common";
import { RenderModule } from "nest-next";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    RenderModule,
    UserModule, // UserModule 추가
  ],
  controllers: [AppController],
})
export class AppModule {}
