'use strict';

let org = require('markdown');

export default class NobbbParseOrg {
    constructor() {
        this.name = 'markdown';
    }

    check(file) {
        return /\.markdown$/.test(file);
    }
    
    parse(mdCode) {

        let lines = mdCode.split('\n');
        for (let i = 0; ; i++) {
            
        }
        
        return {
            
        };
    }
}
