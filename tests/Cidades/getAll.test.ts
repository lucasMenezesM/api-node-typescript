import { testServer } from "../jest.setup";
import { StatusCodes } from "http-status-codes";

describe("Get all Cidades", () => {
  it("Get all Cidades", async () => {
    const createCidade = await testServer.post("/cidades").send({ nome: "Rio de janeiro" });

    expect(createCidade.statusCode).toEqual(StatusCodes.CREATED);

    const res = await testServer.get("/cidades");

    expect(Number(res.header["x-total-count"])).toBeGreaterThan(0);
    expect(res.statusCode).toEqual(StatusCodes.OK);
    expect(res.body).toHaveProperty("cidades");
    expect(res.body.cidades.length).toBeGreaterThan(0);
  });

  it("string page input", async () => {
    const res = await testServer.get("/cidades").query({ page: "das" });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.query.page");
  });

  it("page equals 0", async () => {
    const res = await testServer.get("/cidades").query({ page: 0 });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.query.page");
  });

  it("string limit", async () => {
    const res = await testServer.get("/cidades").query({ limit: "a" });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.query.limit");
  });

  it("limit equals 0", async () => {
    const res = await testServer.get("/cidades").query({ limit: 0 });

    expect(res.statusCode).toEqual(StatusCodes.BAD_REQUEST);
    expect(res.body).toHaveProperty("errors.query.limit");
  });
});
