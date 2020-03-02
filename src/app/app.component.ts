import { Component } from '@angular/core';

@Component({
  selector: 'my-profile',
  template: `
  <div id = "container">
  <h1>MyProfile</h1>
  <img src = {{person.avatar}} />
  <h2> my name is {{person.firstname}} {{person.lastname}}</h2>
  <h2> age :{{person.age}} </h2>
  <h2>address</h2>
  <ul>
  <li> street:{{person.address.street}}</li>
  <li> street:{{person.address.city}}</li>
  <li> street:{{person.address.country}}</li>
  </ul>
  <h2>friend</h2>
  <ul>
  <li *ngFor="let friend of person.friend">
  {{friend.name}}, {{friend.age}}

  </li>
  </ul>
</div>
  
`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myprofileapp';
  person ={
    firstname: 'thach',
    lastname: 'ngo',
    avatar :"http://ttol.vietnamnetjsc.vn//2016/07/31/10/35/anh-cuoi-khong-doi-mu-bao-hiem-ben-dan-xe-dream-gay-bat-binh_1.jpg",
    age:22,
    address:{
      street: 'thanh tri',
      city:"hanoi",
      country : 'vietnam'
    },
    friend:[
      {name:'thuy' ,age:21},
      {name:'thai' ,age:21},
      {name:'thanh' ,age:21},
    ]
  }
}
