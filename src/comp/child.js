import Base from "comp/base";
import Service from "comp/service";
import {transient, inject} from 'aurelia-framework';

@transient()
@inject(Service)
export default class Child extends Base {

    constructor(service) {
    	console.log('Child');
        super(service);
    }

    exec() {
    	console.log('child exec');
        this.action();
    }
}
