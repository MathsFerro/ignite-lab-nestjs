import { IsNotEmpty, Length } from "class-validator";

export class CreateNotificationBody {
    @IsNotEmpty()
    content: string;

    @IsNotEmpty()
    category: string;
    
    @Length(5, 240)
    @IsNotEmpty()
    recipientId: string
}