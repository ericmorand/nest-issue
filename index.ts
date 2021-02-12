import {NestFactory} from "@nestjs/core";
import {AppModule} from "./src/app";

function bootstrap() {
    NestFactory.create(AppModule).then((application) => {
        application.listen(3000);
    });
}

bootstrap();