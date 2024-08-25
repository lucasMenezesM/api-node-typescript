import express from "express";
import "./shared/services/TranslationYup";

import cidadeRoutes from "./routes/cidades";
import pessoasRoutes from "./routes/pessoas";

export const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/cidades", cidadeRoutes);
app.use("/pessoas", pessoasRoutes);
