import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Delete cidade", () => {
  it("Delete Cidade", async () => {
    const createdCidade = await testServer.post("/cidades").send({ nome: "Rio de Janeiro" });

    expect(createdCidade.statusCode).toEqual(StatusCodes.CREATED);

    const res = await testServer.delete("/cidades/" + createdCidade.body);

    expect(res.statusCode).toEqual(StatusCodes.NO_CONTENT);
  });

  it("delete with invalid id", async () => {
    const res = await testServer.delete("/cidades/0");

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
  });

  it("delete with a non-existent id", async () => {
    const res = await testServer.delete("/cidades/999999");

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty("errors.default");
  });
});
