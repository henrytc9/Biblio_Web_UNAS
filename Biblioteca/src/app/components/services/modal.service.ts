import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class modalService {
    @Output() enviaInfo: EventEmitter<any> = new EventEmitter();
    constructor(){
    }
}