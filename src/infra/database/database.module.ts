import { Module } from "@nestjs/common";
import { NotificationRepository } from "src/application/repository/notification-repository";
import { PrismaService } from "./prisma/prisma.service";
import { PrismaNotificationRepository } from "./prisma/repository/prisma-notification-repository";

@Module({
    imports: [],
    providers: [
        PrismaService, 
        {
            provide: NotificationRepository,
            useClass: PrismaNotificationRepository
        }
    ],
    exports: [NotificationRepository]
})
export class DatabaseModule {}