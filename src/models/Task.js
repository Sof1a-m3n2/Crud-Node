import { Schema, model } from "mongoose";

const tareasEsquema = new Schema(
  {
    titulo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    descripcion: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model("Tarea", tareasEsquema);
