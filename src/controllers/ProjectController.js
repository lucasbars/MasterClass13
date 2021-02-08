const { query } = require("express");
const knex = require("../database");

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id, page=1 } = req.query;

      const query =  knex('projects')
      .limit(3)
      .offset((page - 1) * 5);

      const countObj = knex('projects').count();

      if(user_id){
        query.where({ user_id })
        .join('users', 'users.id', '=', 'projects.user_id')
        .select('projects.*', 'users.username')
        .where('users.delete_at', null)

        countObj.where({ user_id });
      }

      const [count] = await countObj;

      res.header('X-total-Count', count['count']);

      
      const results = await query;
      return res.json(results);

    } catch (error) {
        next(error);
    }
  },
  async create(req, res, next) { 
    const { title, user_id } = req.body;
    
    try {
      await knex('projects').insert({title, user_id });
      return res.status(201).send();

    } catch (error) {
      next(error);      
    }

  }
}