
const host = 'http://localhost:3000'
axios.get(host + '/api/teacher/schedule', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    // console.log(result.data.schedules[0]);
    document.getElementById("invisibleID").value = result.data.schedules[0]._id ;
    console.log(document.getElementById("invisibleID").value);
    let schedules = result.data.schedules[0].activityList;
    let info = " ";
    $.each(schedules, function (index, value) {
      info += `
          <tr>            
          <td> ${new Date(value.start).getDate()}/${new Date(value.start).getMonth()+1}/${new Date(value.start).getFullYear()} </td>
          <td> ${new Date(value.start).getHours()}:${new Date(value.start).getMinutes()}-${new Date(value.end).getHours()}:${new Date(value.end).getMinutes()}</td>            
          <td> ${value.content} </td>
          <td>
          <button    type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteActivity">
            Xóa
          </button>
          </td>
                             
        </tr>            
           
             `

    });
    $('#information').html(info);
  }
})



function addActivity() {
  console.log(document.getElementById("invisibleID").value);
  console.log(document.getElementById("content").value);
  console.log(document.getElementById("start").value);
  console.log(document.getElementById("end").value);
  console.log(document.getElementById("date").value);
  


  axios.post('http://localhost:3000/api/teacher/activity',{
    scheduleId : document.getElementById("invisibleID").value,
    date : document.getElementById("date").value,
    newActivity : {
      start :document.getElementById("start").value,
      end :document.getElementById("end").value,
      content :document.getElementById("content").value
    }
  }, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
})
  .then((rs) => {
    console.log(rs);
    if(rs.data.success){
      alert(rs.data.message);
    }else{
      alert(rs.data.message);
    }
    window.location.reload();             
  })   
}