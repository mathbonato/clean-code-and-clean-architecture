import CouponRepositoryMemory from "../src/CouponRepositoryMemory";
import ItemRepositoryMemory from "../src/ItemRepositoryMemory";
import OrderRepositoryMemory from "../src/OrderRepositoryMemory";
import PlaceOrder from "../src/PlaceOrder";


test("Deve fazer um pedidp", function () {
    const itemRepository = new ItemRepositoryMemory();
    const orderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();

    const placeOrder = new PlaceOrder(itemRepository, orderRepository, couponRepository);
    const input = {
        cpf: "935.411.347-80",
        orderItems: [
            { idItem: 1, quantity: 1 },
            { idItem: 2, quantity: 1 },
            { idItem: 3, quantity: 3 }
        ],
        coupon: "VALE20"
    };
    const output = placeOrder.execute(input);
    expect(output.total).toBe(4872);
});