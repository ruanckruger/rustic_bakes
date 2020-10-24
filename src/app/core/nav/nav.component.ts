import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  public hasScrolled: boolean = false;
  constructor(private ref: ChangeDetectorRef) { }

  ngOnInit(): void {
    window.addEventListener('scroll', this.onScroll, true);
  }

  onScroll = (): void => {
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    
    if (currentScroll > 49) {
      this.hasScrolled = true;
    } else {
      this.hasScrolled = false;
    }
    this.ref.detectChanges();
    console.log(this.hasScrolled);
  }
}
