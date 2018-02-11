import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Injectable } from "@angular/core";
import { SocketIoModule } from "ng-socket-io";

import { AppComponent } from "./app.component";
import { ChatSocket } from "./chat-socket";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SocketIoModule],
  providers: [ChatSocket],
  bootstrap: [AppComponent]
})
export class AppModule {}
