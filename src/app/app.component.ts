import { Component } from "@angular/core";
import { ChatService } from "./chat.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [ChatService]
})
export class AppComponent {
  messages = [];

  constructor(private chatService: ChatService) {
    this.chatService.getMessage().subscribe(evt => {
      this.messages.push(evt.message);
    });

    this.chatService.sendMessage("Message that I have sent!");
  }
}
