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
        
        return {
            
        };
    }
}
