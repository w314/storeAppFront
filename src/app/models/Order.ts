import { OrderItem } from './OrderItem'

export class Order {
    order : {
        items: OrderItem [],
        status: 'active' | 'closed',
    };

    constructor() {
        this.order = {
            items: [],
            status: 'active'
        }
    }
}


