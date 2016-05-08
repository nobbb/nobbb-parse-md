'use strict';

let markdown = require('markdown').markdown;

let R = require('fw-ramda');

export default class NobbbParseMarkdown {
    constructor() {
        this.name = 'markdown';
    }

    check(file) {
        return /\.md$/.test(file);
    }
    
    parse(mdCode) {
        let lines = mdCode.split('\n');
        let infos = {};
        let i = 0;
        for (; ; i++) {
            if( /^<!--.+-->$/.test(lines[i]) ){

                let info = lines[i].substring(4, lines[i].length - 3);

                let un = info.split(':'),
                    key = un[0].toLowerCase(),
                    value = R.drop(1, un).join(':');

                infos[key] = value;
                console.log(infos);
            } else {
                break;
            }
        }
        
        return {
            title: infos.title,
            content: markdown.toHTML(R.drop(i, lines).join('\n')),
            type: this.name
        };
    }
}
