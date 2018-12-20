import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FrameDataInterface } from './frame-data.interface';
// import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FrameDataService {
  // api call vars
  apiUrl = 'https://www.mymarchon/service/frame-data';
  apiKey = '8318eb9f4b984124b27a2bf262a98051';
  fullApiString = `${this.apiUrl}&apiKey=${this.apiKey}`;
  pdfUrl = 'https://www.vspglobal.com/pdf-generator';

  // interface container
  frameDataContainer: FrameDataInterface;

  // constructor
  constructor(private http: HttpClient) {}

  // get frame data api call function
  getFrameData(inputValue) {
    const value = inputValue;
    console.log('frame input service data = ' + value);

    // api get example

    // this.http.get<FrameDataInterface>(this.fullApiString).subscribe(result => {
    //   this.frameDataContainer = result;
    // });

    // http post example

    // const url = `${this.apiUrl}/post`;
    // this.http.post(url, { input: inputValue }).subscribe(res => {
    //   console.log(res);
    //   console.log( res.json() );
    //   parse JSON into variables or send to not-found page
    //   this.sendToPDF(type, name, date, lang);
    // });
  } // end of getFrameData()

  // send info to pdf generator
  /*
  sendToPDF(type, name, date, lang) {
    // http post
    const url = `${this.pdfUrl}/post`;
    this.http.post(url, { type: type, name: name, date: date, lang: lang }).subscribe(res => {
      console.log(res);
    });
    console.log('POSTED');
  }
  */
}
