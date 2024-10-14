import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  log(message: string){
    const timpeStamp = new Date().toLocaleTimeString();
    console.log(`[${timpeStamp}]: ${message}`);
  }

}
