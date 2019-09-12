const db = require('../data/db-config.js');


module.exports = {
    find,
    findByID, 
    findSteps, 
    add, 
    update
  }

function find() {
    return db('schemes');
}

function findByID(id) {
    return db('schemes').where({ id }).first();
}


function findSteps(id) {
    return db('schemes as S')
    .join('steps', 'S.id', 'steps.scheme_id')
    .select(
      'steps.id',
      'S.scheme_name',
      'steps.step_number',
      'steps.instructions',
    )
    .where('steps.scheme_id', id)
    .orderBy('step_number', 'ascending');
}

function add(scheme) {
    return db('schemes')
    .insert(scheme) 

}

function update (changes,id) {
    return db('schemes')
    .insert(schemes.id,id)
    .update(changes)
    .then(ids => {
      return findById(ids[0]);
    });
}

function remove(id)