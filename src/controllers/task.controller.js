import Task from '../models/Task';

export const renderTasks = 
    async(req, res) => {

    const tasks = await Task.find().lean();

    res.render('index',{tasks: tasks});
  };

export const guardarTarea = 
    
    async (req,res)=>{

    try {
      const task = Task(req.body);
  
      const tareaGuardada= await task.save();
  
      res.redirect('/');
      
    } catch (error) {
  
      console.log(error);
      
    }
  
  };

export const obtenerdatos =
     async (req, res) => {

    try {
      const task = await Task.findById(req.params.id).lean();
      res.render("edit", {task});
      
    } catch (error) {
  
      console.log(error,message);
      
    }
    }

export const editarDatos =
    async(req,res)=>{

    const{id} = req.params;
  
    await Task.findByIdAndUpdate(id,req.body);
  
    res.redirect('/');
  
  
  
  }

export const eliminarDatos=
    async(req,res)=>{
    const{id}= req.params;
    await Task.findOneAndDelete(id);
    res.redirect('/');
  }