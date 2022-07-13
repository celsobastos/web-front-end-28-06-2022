"use strict"
let ApplyColor = function (color, target) {
    this.objectColor = document.querySelector(color);
    this.objectTarget = document.querySelector(target);

    this.executeColor = function () {
        this.objectColor.addEventListener('input', () => {
            let cor = this.objectColor.value;
            this.objectTarget.style.backgroundColor = cor;
        });
    }
}
