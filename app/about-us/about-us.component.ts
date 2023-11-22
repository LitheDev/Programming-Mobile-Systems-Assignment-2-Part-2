/* ABOUT US COMPONENT */

import {Component} from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: `

    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground-page-header">
      <h2>About Us</h2>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND: ABOUT US =============== -->

    <div class="foreground">
        <div>
          <h2>About Me</h2>
          <p>My name is Natalie and I live in Sydney. I am working on this website as part of an assignment.</p>
        </div>
        <div>
          <h2>Contact Us</h2>
          <p>You can reach me via phone on 0455-555-555 or via email at email@email.com</p>
        </div>
    </div>
    <!-- ================FOREGROUND: ABOUT US =============== -->
   `,

  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent
{

}
