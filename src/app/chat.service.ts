import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { ChatSocket } from "./chat-socket";

@Injectable()
export class ChatService {
  constructor(private socket: ChatSocket) {}

  getMessage() {
    return this.socket.fromEvent<any>("chat-message");
  }

  sendMessage(message: string) {
    this.socket.emit("chat-message", message);
  }
}
