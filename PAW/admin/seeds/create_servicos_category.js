const bcrypt = require('bcrypt');

exports.seed = function(knex) {
  
  return knex('category').del()
    .then(function () {
    
      return knex('category').insert([
        {
          id: 1,
          name: 'cosméticos'
        },
        {
          id: 2,
          name: 'vestuário'
        },
      ]);
    });

};