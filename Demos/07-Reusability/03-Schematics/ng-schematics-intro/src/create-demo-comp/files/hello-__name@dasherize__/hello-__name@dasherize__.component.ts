import { Component } from '@angular/core';

@Component({
    selector: 'demo-<%= dasherize(name) %>',
    template: `<h1><%= greeting %> {{name}}</h1>`
})
export class Demo<%= classify(name) %>Component {
    name = '<%= addExclamation(name) %>'
}
