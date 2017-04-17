import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'st-lifecycle',
  template: `<h1>Life Cycle Hooks</h1>`,
})
export class LifeCycleComponent implements OnInit, OnDestroy { 

    ngOnInit() {
        console.log("Component Initialized!");
    }

    ngOnDestroy() {
        console.log("Component Destoryed!");
    }
}
