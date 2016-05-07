'use strict';

let org = require('org');

let parser = new org.Parser();

export default class NobbbParseOrg {
    constructor() {
        this.name = 'org';
    }

    check(file) {
        return /\.org$/.test(file);
    }
    
    parse(orgCode) {
        let orgDocument = parser.parse(orgCode);
        let orgHTMLDocument = orgDocument.convert(org.ConverterHTML, {
            headerOffset: 1,
            exportFromLineNumber: false,
            suppressSubScriptHandling: false,
            suppressAutoLink: false
        });
        return {
            title: orgHTMLDocument.title,
            content: orgHTMLDocument.contentHTML
        };
    }
}
