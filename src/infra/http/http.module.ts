import { Module } from "@nestjs/common";
import { SendNotificationUseCase } from "src/application/usecases/send-notification-use-case";
import { DatabaseModule } from "../database/database.module";
import { NotificationController } from "./rest/notification.controller";

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationController],
    providers: [SendNotificationUseCase],
  })
  export class HttpModule {}