import { Component, OnInit } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loaderHeader: string;
  loaderTitle: string;
  loaderSubTitle: string;
  loaderLogo: string;
  loaderInfo1Title: string;
  loaderInfo1Text: string;
  loaderInfo2Title: string;
  loaderInfo2Text: string;
  loaderInfo3Title: string;
  loaderInfo3Text: string;
  loaderInfo4Title: string;
  loaderInfo4Text: string;
  loaderFooter1: string;
  loaderFooter2: string;

  constructor(private oauthService: OAuthService) {
    // this.loaderHeader= environment.loaderHeader;
    // this.loaderTitle= environment.loaderTitle;
    // this.loaderSubTitle= environment.loaderSubTitle;
    // this.loaderLogo= environment.loaderLogo;
    // this.loaderInfo1Title= environment.loaderInfo1Title;
    // this.loaderInfo1Text=environment.loaderInfo1Text;
    // this.loaderInfo2Title= environment.loaderInfo2Title;
    // this.loaderInfo2Text= environment.loaderInfo2Text;
    // this.loaderInfo3Title= environment.loaderInfo3Title;
    // this.loaderInfo3Text= environment.loaderInfo3Text;
    // this.loaderInfo4Title= environment.loaderInfo4Title;
    // this.loaderInfo4Text= environment.loaderInfo4Text;
    // this.loaderFooter1= environment.loaderFooter1;
    // this.loaderFooter2= environment.loaderFooter2;
  }

  ngOnInit() {
  }

  acceder() {
    this.oauthService.initImplicitFlow();
  }

}
