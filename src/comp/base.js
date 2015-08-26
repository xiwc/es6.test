import Service from "comp/service";
import {transient, inject} from 'aurelia-framework';

@transient()
@inject(Service)
export default class Base {

    constructor(service) {
    	console.log('Base');
        this.service = service;
    }

    action(){
    	console.log('base action');
    	this.service.action();
    }
}
