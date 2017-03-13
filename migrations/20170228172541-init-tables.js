exports.up = function (r, connection) {
  return Promise.all([
    r.tableCreate('category').run(connection),
    r.tableCreate('image').run(connection),
    r.tableCreate('education').run(connection),
    r.tableCreate('experience').run(connection),
    r.tableCreate('interest').run(connection),
    r.tableCreate('skill').run(connection),
    r.tableCreate('travel').run(connection)
  ])
};

exports.down = function (r, connection) {
  return Promise.all([
    r.tableDrop('category').run(connection),
    r.tableDrop('image').run(connection),
    r.tableDrop('education').run(connection),
    r.tableDrop('experience').run(connection),
    r.tableDrop('interest').run(connection),
    r.tableDrop('skill').run(connection),
    r.tableDrop('travel').run(connection)
  ])
};
