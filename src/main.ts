import { NestFactory } from "@nestjs/core";
import { RenderModule } from "nest-next";
import Next from "next";
import "reflect-metadata";
import { AppModule } from "./application.module";

async function bootstrap() {
  const dev = process.env.NODE_ENV !== "production";
  const app = Next({ dev }); // create Next.js app

  await app.prepare();

  // create Nest.js app using AppModule(contains RenderModule)
  const server = await NestFactory.create(AppModule);

  // get registered RenderModule in Nest.js app
  const renderer = server.get(RenderModule);
  // bind Nest.js app and Next.js app
  renderer.register(server, app);

  await server.listen(3002);
}

bootstrap();

/*
ð¡ main.ts

npm dev ë¥¼ ì¤ííë©´ /src/main.ts ê° ì¤íëë¤.
ì ííë main.tsì bootstrap í¨ìê° ì¤íëë©°, ì´ í¨ììì Nest.js app ê³¼ Next.js appì ìì±íê³ , 
RenderModule ì´ ë appì binding íë¤. ë§ì§ë§ì¼ë¡ 3002 PORTë¥¼ listening íë¤.
*/
