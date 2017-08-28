'use strict';
var booleanAnketa = false;

function anketa() {
    booleanAnketa = !booleanAnketa;

    if(booleanAnketa) {
        console.log('Открыто');
    } else {
        console.log('Закрыто');
    }

}