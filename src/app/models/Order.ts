import { OrderItem } from './OrderItem'

export class Order {
    items: OrderItem [];
    status: 'active' | 'closed';

    constructor() {
        this.items =  [];
        this.status = 'active';
    }
}


