import Cpf from "../src/Cpf";

test("Deve testar um cpf válido", function () {
	const cpf = new Cpf("935.411.347-80");
	expect(cpf.getCpf()).toBe("935.411.347-80");
});

const invalidCpfWithSameDigits = [
	"111.111.111-11",
	"222.222.222-22"
];

describe.each(invalidCpfWithSameDigits)("Deve testar um cpf inválido com os dígitos iguais", function (cpf) {
	test(`${cpf}`, function () {
		expect(() => new Cpf(cpf)).toThrow(new Error("CPF inválido!"));
	});
});

test("Deve testar um cpf inválido com dígitos diferentes", function () {
	const cpf = "123.456.789-99";
	expect(() => new Cpf(cpf)).toThrow(new Error("CPF inválido!"));
});
