import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Cidades - Create", () => {
  it("Create cidade", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "Rio de Janeiro" });

    expect(res1.statusCode).toEqual(StatusCodes.CREATED);
    expect(typeof res1.body).toEqual("number");
  });

  it("Short name for Cidade", async () => {
    const res1 = await testServer.post("/cidades").send({ nome: "Ri" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });

  it("No name for Cidade", async () => {
    const res1 = await testServer.post("/cidades").send({});

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });

  it("Wrong key in body", async () => {
    const res1 = await testServer.post("/cidades").send({ cidade: "Rio de janeiro" });

    expect(res1.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res1.body).toHaveProperty("errors.body.nome");
  });
});
