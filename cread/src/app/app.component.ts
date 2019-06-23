import { Component } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cread';
  constructor(private http:HttpClient){

  }
  ngOnInit(){
    
  }
  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  getUser(){
    let headers = new HttpHeaders();
     headers = headers.set('h1', 'v1').set('h2','v2');
    

    return this.http
               .get('http://localhost:3002/setuser',{withCredentials: true, observe: 'response'})
               .subscribe((response: any) => {
                      this.getDetails();
               }, (err) => {
                 this.getDetails();
                   console.log('Error: ' + err);
               });
  }
  getDetails(){
    this.http
                      .get('http://localhost:3002/getuser',{withCredentials: true, observe: 'response'})
                      .subscribe((response: any) => {
                          console.log('test')
                          let headers = response.headers;
                          console.log((this.getCookie('userData'),decodeURIComponent(document.cookie)));
                      }, (err) => {
                          console.log('Error: ' + err);
                      });
  }
}
