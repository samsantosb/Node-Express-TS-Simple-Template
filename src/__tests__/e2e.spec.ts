import { jest } from "@jest/globals";
import { mongoConnect, mongoDisconnect } from "../db/mongo.connection";
import express from "express";
import supertest from "supertest";
import userRoutes from "../user/routes/user.routes";

const app = express();
app.use(express.json());
app.use("/test", userRoutes);

const testUser = {
  name: "Test",
  email: "test@test.com",
  age: 25,
  cpf: "048.607.240-11",
};

const testUser2 = {
  name: "Test",
  email: "test@test.com",
  age: 26,
  cpf: "048.607.240-11",
};

beforeAll(() => {
  mongoConnect();
});

afterAll(() => {
  mongoDisconnect();
});

describe("User", () => {
  it("should get all users", async () => {
    const response = await supertest(app).get("/test");
    expect(response.status).toBe(200);
  });

  it("should get user by id", async () => {
    const getAll = await supertest(app).get("/test");
    const id = getAll.body[0]._id;
    const response = await supertest(app).get(`/test/${id}`);
    expect(response.status).toBe(200);
  });

  it("should create user", async () => {
    const response = await supertest(app).post("/test").send(testUser);
    expect(response.status).toBe(201);
  });

  it("should update user", async () => {
    const getAll = await supertest(app).get("/test");
    const lastUser = getAll.body[getAll.body.length - 1];
    const id = lastUser._id;
    const response = await supertest(app).put(`/test/${id}`).send(testUser2);
    expect(response.status).toBe(200);
  });

  it("should delete user", async () => {
    const getAll = await supertest(app).get("/test");
    const lastUser = getAll.body[getAll.body.length - 1];
    const id = lastUser._id;
    const response = await supertest(app).delete(`/test/${id}`);
    expect(response.status).toBe(200);
  });
});
