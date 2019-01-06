/*
    SuitCount.js

    Leif Anderson
    copyright 2018-2019
    Dec. 27th, 2018
*/

import Deck from './Deck';

class SuitCount { // an abstract notion of suit counting for card players

    constructor() {
        this.combinations = [];
        this.deck = new Deck();
    }

    generate_suit_combinations() { 
        let combination = (p1,p2,p3,p4) => {
            this.p1 = p1;
            this.p2 = p2;
            this.p3 = p3;
            this.p4 = p4;
            return {'p1':this.p1,'p2':this.p2,'p3':this.p3,'p4':this.p4};
        };
    }
}

