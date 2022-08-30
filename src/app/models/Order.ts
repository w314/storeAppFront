import { OrderItem } from './OrderItem'

export class Order {
    items: OrderItem[] = [];
    status: 'active' | 'closed' = 'active';

    constructor() {
    }
}


