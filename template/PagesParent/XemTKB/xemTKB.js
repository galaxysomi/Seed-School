
  const host = 'http://localhost:3000'
  axios.get(host + '/api/parent/schedule', {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(result => {
    if (result.data.status === 'ok') {
      console.log(result);
    }
  })




function findActivity() {
    axios.get("http://localhost:3000/api/admin/activities")  // dien link api vao
      .then((activities) => { 
        console.log(activities.data);           
        let info = " ";
        $.each(activities.data, function (index, value) {
          info += `
          <tr>
            <td> ${value.date}  </td>
            <td> ${value.timeStart} - ${value.timeFinish} </td>
            <td> ${value.title}</td>                        
            <td> ${value.place}</td>
            
            
          </tr>            
           `            
        });         
        $('#information').html(info);
      });
    }
            
  function submitSuccess(){
    alert("Submit thành công");
}      