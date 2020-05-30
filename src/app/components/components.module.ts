import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

// components
import { BaskiButtonComponent } from './baski-button/baski-button.component';

/** NgModule */
@NgModule({
    exports: [
        BaskiButtonComponent
    ],
    declarations: [
        BaskiButtonComponent
    ],
    entryComponents: [
        BaskiButtonComponent
    ],
    imports: [IonicModule, CommonModule]
})
export class ComponentsModule {
}
