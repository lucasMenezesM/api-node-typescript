import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Update cidade", () => {
  it("Update cidade", async () => {
    const createdCidade = await testServer.post("/cidades").send({ nome: "Rio de janeiro" });

    expect(createdCidade.statusCode).toEqual(StatusCodes.CREATED);

    const res = await testServer.put("/cidades/" + createdCidade.body).send({ nome: "São Paulo" });

    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty("cidade");
  });

  it("update with Invalid input", async () => {
    const res = await testServer.put("/cidades/1").send({ nome: "" });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.body.nome");
  });

  it("update with Invalid param", async () => {
    const res = await testServer.put("/cidades/0").send({ nome: "rio de janeiro" });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.params.id");
  });
});
