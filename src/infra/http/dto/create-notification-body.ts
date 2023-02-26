import { IsNotEmpty, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    recipientId: string;

    @Length(5, 240)
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    category: string;
}