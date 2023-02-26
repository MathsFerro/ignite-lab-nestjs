import { SendNotificationUseCase } from "./send-notification-use-case";
import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notification-repository";
import { Notification } from "../entities/notification";

describe('Send notification', () => {
    it('should be able to send a notification', async() => {
        const notificationRepository = new InMemoryNotificationRepository();
        const sendNotificationUseCase = new SendNotificationUseCase(notificationRepository);
        
        const { notification } = await sendNotificationUseCase.execute({
            content: 'This is a notification',
            category: 'social',
            recipientId: 'example-recipient-id'
        });

        expect(notificationRepository.notifications).toHaveLength(1);
        expect(notification).toEqual(notificationRepository.notifications[0])
    });
});