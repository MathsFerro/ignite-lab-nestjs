import { Injectable } from "@nestjs/common";
import { Notification } from "../../../../application/entity/notification";
import { NotificationRepository } from "../../../../application/repository/notification-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
    constructor(private prismaService: PrismaService) {}

    async create(notification: Notification): Promise<void> {
        this.prismaService.notification.create({
            data: {
                id: notification.id,
                recipientId: notification.recipientId,
                content: notification.content.value,
                category: notification.category,
                readAt: notification.readAt,
                createdAt: notification.createdAt
            }
        });
    }

}