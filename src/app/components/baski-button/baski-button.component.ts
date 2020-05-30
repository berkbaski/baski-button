import { Component, OnInit, ViewChild } from '@angular/core';
import { GestureController } from '@ionic/angular';

@Component({
    selector: 'baski-button',
    templateUrl: './baski-button.component.html',
    styleUrls: ['./baski-button.component.scss'],
})
export class BaskiButtonComponent implements OnInit {

    parentButtonWidth: number;
    childButtonWidth: number;

    @ViewChild('parentButton') parentButton: any;
    @ViewChild('childButton') childButton: any;

    constructor(
        private gestureCtrl: GestureController
    ) {
    }

    async ngOnInit() {
        setTimeout(() => {
            this.parentButtonWidth = this.parentButton.el.getBoundingClientRect().width;
            this.childButtonWidth = this.childButton.el.getBoundingClientRect().width;

            const gesture = this.gestureCtrl.create({
                gestureName: 'swipe-button',
                el: this.childButton.el,
                onMove: detail => {

                    // is fast swipe
                    // if (detail.currentTime - detail.startTime <= 30 && detail.currentX - detail.startX > 0) {
                    //     for (let i = detail.currentX; i <= this.parentButtonWidth - this.childButtonWidth; i++) {
                    //         setTimeout(() => {
                    //             this.childButton.el.style.left = `${i}px`;
                    //         }, 1000);
                    //     }
                    // }

                    if (detail.currentX + this.childButtonWidth >= this.parentButtonWidth) {
                        this.childButton.el.style.left = `${this.parentButtonWidth - this.childButtonWidth}px`;
                    } else {
                        this.childButton.el.style.left = `${detail.currentX}px`;
                    }

                    if (detail.currentX <= 0) {
                        this.childButton.el.style.left = `0px`;
                    }
                }
            });
            gesture.enable();
        }, 500);
    }
}
