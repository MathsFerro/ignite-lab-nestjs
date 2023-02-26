import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class SMTPEmailService implements MailService {
    getStmpEmail(): string {
        return "Mail";
    }
}