import Coupon from "./Coupon";
import Cpf from "./Cpf";
import Item from "./Item";
import OrderItem from "./OrderItem";

export default class Order {
    cpf: Cpf;
    orderItems: OrderItem[];
    coupon: Coupon | undefined;

    constructor (cpf: string, readonly issuedDate: Date = new Date()) {
        this.cpf = new Cpf(cpf);
        this.orderItems = []
    }

    getTotal () {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.getTotal();
        }
        if (this.coupon) {
            total -= this.coupon.calculateDisccount(total);
        }
        return total;
    }

    addItem (item: Item, quantity: number) {
        this.orderItems.push(new OrderItem(item.idItem, item.price, quantity));
    }

    addCoupon(coupon: Coupon) {
        if (!coupon.isExpired(this.issuedDate)) {
            this.coupon = coupon;
        }
    }
}