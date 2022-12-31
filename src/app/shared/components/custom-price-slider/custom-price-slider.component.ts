import { Component } from '@angular/core';
import { LabelType, Options } from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-custom-price-slider',
  templateUrl: './custom-price-slider.component.html',
  styleUrls: ['./custom-price-slider.component.css']
})
export class CustomPriceSliderComponent {
  minValue: number = 0;
  maxValue: number = 5000;
  options: Options = {
    floor: 0,
    ceil: 6000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Prix minimum:</b> EUR' + value;
        case LabelType.High:
          return '<b>Price max:</b> EUR' + value;
        default:
          return 'EUR' + value;
      }
    }
  };
}
