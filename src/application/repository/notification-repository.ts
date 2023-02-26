import { Notification } from "../entity/notification";

export abstract class NotificationRepository {
    abstract create(notification: Notification): Promise<void>;
}