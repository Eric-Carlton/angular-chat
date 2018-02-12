import { Injectable } from "@angular/core";
import { Socket } from "ng-socket-io";
import { environment } from "../environments/environment";


@Injectable()
export class ChatSocket extends Socket {
  constructor() {
    super({ url: `${environment.apiHost}/io/chat` });
  }
}
