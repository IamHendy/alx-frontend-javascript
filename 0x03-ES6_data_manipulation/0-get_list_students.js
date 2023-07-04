//Create a function named getListStudents that returns an array of objects.
//Each object should have three attributes: id (Number), firstName (String), and location (String).

export default function getListStudents() {
  return[
    {id: 1, firstname: 'Guillaume', location: 'San Francisco'},
    {id:2, firstname: 'James', location: 'Columbia'},
    {id:5, firstname:'Serena', location: 'San Francisco'},
  ];
}