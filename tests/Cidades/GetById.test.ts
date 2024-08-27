import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Cidades - Create", () => {
  it("Get by id", async () => {
    const createdCidade = await testServer.post("/cidades").send({ nome: "Rio de janeiro" });

    expect(createdCidade.statusCode).toEqual(StatusCodes.CREATED);

    const res = await testServer.get("/cidades/" + createdCidade.body);

    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty("cidades.nome");
    expect(res.body).toHaveProperty("cidades.id");
  });

  it("search for a non-existent id", async () => {
    const res = await testServer.get("/cidades/999999");

    expect(res.statusCode).toEqual(StatusCodes.NOT_FOUND);
    expect(res.body).toHaveProperty("errors.default");
  });
});
