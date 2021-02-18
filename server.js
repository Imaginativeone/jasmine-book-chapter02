const express = require("express");
const server = express();
// const port = 4000;
const port = 8001;
const body_parser = require('body-parser');

server.use(express.static('public'));
server.use(express.static(__dirname));

let data = require('./data');
let initialData = JSON.parse(JSON.stringify(data));

// parse application/x-www-form-urlencoded
server.use(body_parser.urlencoded({ extended: false }))

// parse application/json
server.use(body_parser.json())

server.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// server.use(body_parser.json());

// server.get('/', (req, res) => {
//   res.send(data);
// });

server.get('/users', (req, res) => {
  res.json(data.users);
});

server.get('/hobbies', (req, res) => {
  res.json(data.hobbies);
});

server.get('/favorites', (req, res) => {
  res.json(data.favorites);
});

server.post('/updateUsers', (req, res) => {  
  const newUserData = req.body;

  res.json(updateData('users', newUserData));
});

server.post('/updateHobbies', (req, res) => {  
  const newHobbyData = req.body;

  res.json(updateData('hobbies', newHobbyData));
});

server.post('/updateFavorites', (req, res) => {  
  const newFavoriteData = req.body;

  res.json(updateData('favorites', newFavoriteData));
});

server.get('/reset', (req, res) => {
  data = initialData;
});

server.listen(port, (err) => {

  if (err) {
    console.log(err)
  }
  console.log(`Server listening at ${port}`);
});

function updateData(type, newData) {

  console.log('Updating Data');

  let indexForError, updatedRecord;
  let updatedData = [];
  
  // users and hobbies are treated normally. favorites will have the possibility of throwing an error
  if (type == 'favorites') {
    const count = newData.length;
    indexForError = Math.floor(Math.random() * Math.floor(count));
  }

  newData.forEach((item, index) => {
    let recordIndex = data[type].findIndex(datum => datum.id == item.id);

    // if no record is found, throw an error
    if (recordIndex == -1) throw new Error(`${type} does not contain a record for id ${item.id}`);

    if (type == 'favorites' && index == indexForError) {
      updatedRecord = { id: item.id, user_id: item.user_id, error: "could not be saved"};
    } else {

      
      item.last_modified = 'now';
      console.log("Item for modification", item);
      
      updatedRecord = item;
    }

    updatedData.push(updatedRecord);
  });

  return updatedData;
}