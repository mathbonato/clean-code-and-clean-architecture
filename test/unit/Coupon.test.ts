import Coupon from "../../src/domain/entity/Coupon";

test("Deve criar um cupom de desconto.", function () {
    const coupon = new Coupon("VALE20", 20);
    const isExpired = coupon.isExpired();
    expect(isExpired).toBeFalsy();
});

test("Deve criar um cupom de desconto expirado .", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2019-03-01T10:00:00"));
    expect(coupon.percentage).toBe(20);
    const isExpired = coupon.isExpired(new Date("2021-03-01T10:00:00"));
    expect(isExpired).toBeTruthy();
});

test("Deve criar um cupom de desconto e calcular o desconto .", function () {
    const coupon = new Coupon("VALE20", 20, new Date("2019-03-01T10:00:00"));
    expect(coupon.percentage).toBe(20);
    const discount = coupon.calculateDisccount(1000);
    expect(discount).toBe(200);
});