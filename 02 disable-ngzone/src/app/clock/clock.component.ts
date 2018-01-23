import {AfterViewChecked, ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit} from '@angular/core';
import {appStore} from '../appStore';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClockComponent implements OnInit, DoCheck, AfterViewChecked {
  static nextId = 0;
  id: number;

  constructor(private cdr: ChangeDetectorRef) {
    this.id = ++ClockComponent.nextId;

    const org = cdr.detectChanges;
    cdr.detectChanges = function() {
      console.log("ClockComponent.detectChanges");
      return org.apply(this, arguments);
    }
  }

  ngOnInit() {
  }

  ngDoCheck() {
    console.log("ClockComponent.ngDoCheck");
  }

  ngAfterViewChecked() {
    console.log(`ClockComponent(${this.id}).AfterViewChecked`);
  }

  run() {
    appStore.counter++;

    this.cdr.markForCheck();
  }

  get counter() {
    return appStore.counter;
  }

  test() {
    console.log(`ClockComponent(${this.id}).test`);
  }
}
