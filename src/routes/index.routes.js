import {Router} from 'express'
import Task from '../models/Task';
import {renderTasks, guardarTarea,obtenerdatos,editarDatos,eliminarDatos} from "../controllers/task.controller";
const router = Router();

router.get("/", renderTasks);

router.post('/tasks/add',guardarTarea);

router.get("/edit/:id",obtenerdatos);

router.post('/edit/:id',editarDatos);

router.get('/delete/:id',eliminarDatos)



export default router;
  