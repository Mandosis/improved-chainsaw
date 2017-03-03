import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ReemoHealthService {

  constructor(private http: Http) { }

  fetch() {
    return this.http
      .get('https://reemoazurefunctions.azurewebsites.net/api/ReemoJSONFromSQL_V2?code=RjOmG1zauttOw3KNdjeNIupqsV0yuI2SgLwVoXhClSzvtNuhYE9t4w==&name=db8abed9-2891-4504-a1fe-d0b3df567244')
      .map((response: any) => {
        response = response._body
          .replace(/\\+/g, '')
          .replace(/\"\[+/g, '[')
          .replace(/\]\"+/g, ']')
          .replace(/("},{"JSON_F52E2B61-18A1-11d1-B105-00805F49916B":")+/g, '');

        response = JSON.parse(response)[0];
        response = response['JSON_F52E2B61-18A1-11d1-B105-00805F49916B'];

        return response;
      });
  }

}
