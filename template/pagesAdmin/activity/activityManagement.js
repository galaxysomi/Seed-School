function getActivityById(id){
  axios.get('http://localhost:3000/api/admin/activity/'+id).then(data=>{
    var d=ampmTo24(data.data.data.timeStart)
    document.getElementById("timeStart").value=d;
    document.getElementById("timeFinish").value=data.data.data.timeFinish;
    document.getElementById("day").value=data.data.data.day; 
    // var d= new Date(parseInt(data.data.data.timeStart))
    document.getElementById("timeStart").value=d.defaultValue
    document.getElementById("place").value=data.data.data.place;
    document.getElementById("description").value=data.data.data.description;

  })
}
function ampmTo24(time)
{
  var hours = Number(time.match(/^(\d+)/)[1]);
  var minutes = Number(time.match(/:(\d+)/)[1]);
  var AP = time.match(/\s(.*)$/);
  if (!AP) AP = time.slice(-2);
  else AP=AP[1];
  if(AP == "PM" && hours<12) hours = hours+12;
  if(AP == "AM" && hours==12) hours = hours-12;
  var Hours24 = hours.toString();
  var Minutes24 = minutes.toString();
  if(hours<10) Hours24 = "0" + Hours24;
  if(minutes<10) Minutes24 = "0" + Minutes24;

  return Hours24 + ":" + Minutes24
}
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
            <td> ${value.description}</td>                        
            <td> ${value.place}</td>
           
            <td>
            <button onClick="getActivityById('${value._id}')" type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeActivity">
            Sửa
          </button>
          <button  onClick="deleteActivity('${value._id}')"  type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteActivity">
            Xóa
          </button>
          </td>        
          </tr>            
           `;
           console.log(value._id);
      });
      $('#information').html(info);
    });
}

function deleteActivity(id) {
  axios.delete('http://localhost:3000/api/admin/activities/' + id)
  .then((rs) => {
    console.log(rs);
    if(rs.data.susccess){
    alert("Xóa hoạt động thành công")
  }
  })
}


$(document).ready(function () {
    findActivity();
    $('#menuTable').DataTable();
});
