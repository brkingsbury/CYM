import { AfterViewInit, Component, Pipe, PipeTransform } from '@angular/core';
import { Offerings } from '../app.offerings';

@Pipe({ name: 'filterClasses' })
export class FilterClassesPipe implements PipeTransform {
    transform(currentClasses: any) {
        let filteredClasses: Offerings[] = [];
        for (let c of currentClasses) {
            if (c.type === 'Class' || c.type === 'Series') {
                filteredClasses.push(c);
            }
        }
        return filteredClasses;
    }
}