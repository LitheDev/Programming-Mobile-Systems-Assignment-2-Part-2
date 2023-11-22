/* PAGE NOT FOUND COMPONENT
* Used for all non-valid pages */

import {Component} from '@angular/core';

@Component({
  selector: 'app-page-not-found',


  template: `
    <!-- ================FOREGROUND HEADER=============== -->
    <div class="foreground-page-header">
      <h2>PAGE NOT FOUND</h2>
    </div>
    <!-- ================FOREGROUND HEADER=============== -->

    <!-- ================FOREGROUND =============== -->
    <div class="foreground">
      <h2>There is nothing here!</h2>
    </div>
    <!-- ================FOREGROUND =============== -->`,
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent
{

}
