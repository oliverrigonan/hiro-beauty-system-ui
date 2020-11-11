import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-software',
  templateUrl: './software.component.html',
  styleUrls: ['./software.component.scss']
})
export class SoftwareComponent implements OnInit {
  public mediaQueryList: MediaQueryList;
  private mediaQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher
  ) {
    this.mediaQueryList = media.matchMedia('(max-width: 600px)');
    this.mediaQueryListener = () => changeDetectorRef.detectChanges();
    this.mediaQueryList.addListener(this.mediaQueryListener);
  }

  @ViewChild('snav') public sidenav: MatSidenav;

  public buttonMenuToggle() {
    this.sidenav.toggle();
  }

  public buttonLogout() {

  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    this.mediaQueryList.removeListener(this.mediaQueryListener);
  }
}
