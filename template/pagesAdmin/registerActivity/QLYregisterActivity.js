var id = location.search.substring(1) ;
console.log(id);

axios.get('http://localhost:3000/api/admin/activities/registerlist/'+id, {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  console.log(result);
  const students = result.data.students
  
})