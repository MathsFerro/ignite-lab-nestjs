import { Notification } from "../../src/application/entity/notification";
import { NotificationRepository } from "../../src/application/repository/notification-repository";

export class InMemoryNotificationRepository implements NotificationRepository {
    public notifications: Notification[] = [];

    async create(notification: Notification) {
        this.notifications = [notification, ...this.notifications];
    }
}