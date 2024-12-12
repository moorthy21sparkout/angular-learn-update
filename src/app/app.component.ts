import { Component, computed, linkedSignal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'linkedsignal';

  sourceSignal = signal(0);

  // computed
  updateSignal3 = computed(() => this.sourceSignal() * 2);


  // short hand
  updateSignal = linkedSignal(() => this.sourceSignal() * 5);


  //source and computation
  updateSignal1 = linkedSignal({
    source: this.sourceSignal,
    computation: () => this.sourceSignal() * 5
  });

  updateSignal2 = linkedSignal({
    source: this.updateSignal1,
    computation: () => this.sourceSignal() * 5
  });
  updatedsignal(){
    this.sourceSignal.set(5);
    this.updateSignal.set(5);

    // this is error because updateSignal is computed only for read
    // this.updateSignal.set(3)    
  }
}