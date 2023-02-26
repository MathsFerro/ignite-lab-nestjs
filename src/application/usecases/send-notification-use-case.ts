import { Injectable } from "@nestjs/common";
import { Content } from "../entity/content";
import { Notification } from "../entity/notification";
import { NotificationRepository } from "../repository/notification-repository";

interface SendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}

interface SendNotificationResponse {
    notification: Notification
}

@Injectable()
export class SendNotificationUseCase {
    constructor(private notificationRepository: NotificationRepository) {}

    async execute(request: SendNotificationRequest): Promise<SendNotificationResponse> {
        const { recipientId, content, category } = request;

        const notification = new Notification({
            recipientId,
            content: new Content(content),
            category
        });

        await this.notificationRepository.create(notification);

        return {
            notification
        }
    }
}