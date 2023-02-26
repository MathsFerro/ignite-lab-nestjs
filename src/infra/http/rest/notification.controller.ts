import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationUseCase } from 'src/application/usecases/send-notification-use-case';
import { CreateNotificationBody } from '../dto/create-notification-body';

@Controller('api/v1/notifications')
export class NotificationController {
  constructor(private sendNotificationUseCase: SendNotificationUseCase) {}

  @Post()
  async createNotification(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category } = body;

    const { notification } = await this.sendNotificationUseCase.execute({
      recipientId,
      content,
      category
    });

    return { notification };
  }
}


// npx prisma init --datasource-provider SQLite