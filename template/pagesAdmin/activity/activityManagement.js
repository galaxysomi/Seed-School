function getActivityById(id) {
  axios.get('http://localhost:3000/api/admin/activities/' + id, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  }).then(data => {
    //document.getElementById("changeDate").value = data.data.date ;
    document.getElementById("updateTitle").value = data.data.title;
    document.getElementById("updateDescription").value = data.data.description;
    document.getElementById("updateTimeStart").value = data.data.timeStart;
    document.getElementById("invisibleID").value = id;
    document.getElementById("updateTimeFinish").value = data.data.timeFinish;
    document.getElementById("updatePlace").value = data.data.place;

  })
}


function refreshPage() {
  window.location.reload();
}


/* function ampmTo24(time)
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
} */
function findActivity() {
  axios.get("http://localhost:3000/api/admin/activities", {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  })  // dien link api vao
    .then((activities) => {
      console.log(activities.data);
      let info = " ";
      $.each(activities.data, function (index, value) {
        info += `
          <tr>
          <td> ${new Date(value.date).getDate()}/${new Date(value.date).getMonth() + 1}/${new Date(value.date).getFullYear()} </td>
            <td> ${value.timeStart} - ${value.timeFinish} </td>
            <td> ${value.title}</td>  
            <td> ${value.description}</td>                        
            <td> ${value.place}</td>
           
            <td>
            <button onClick="getActivityById('${value._id}')" type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeActivity">
            Sửa
          </button>
          <button  onClick="getActivityById('${value._id}')"  type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteActivity">
            Xóa
          </button>
          <button  onClick="thongBao('${value._id}')"  type="button" class="btn btn-success" ">
            Gửi thông báo
          </button>
          <button  onClick="thongBao('${value._id}')"  type="button" class="btn btn-success" ">
          <a href="../registerActivity/QLYregisterActivity.html?${value._id}"> Xem danh sách</a>
          </button>
          </td>        
          </tr>            
           `;
        console.log(value._id);
      });
      $('#information').html(info);
    });
}

function addMenu() {
  axios.post('http://localhost:3000/api/admin/activities', {
    date: document.getElementById("Date").value,
    description: document.getElementById("description").value,
    title: document.getElementById("title").value,
    timeStart: document.getElementById("timeStart").value,
    timeFinish: document.getElementById("timeFinish").value,
    place: document.getElementById("place").value
  }, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  })
    .then((rs) => {
      if (rs.data.success) {
        alert(rs.data.message);
      } else {
        alert(rs.data.message);
      }
      //refreshPage();               
    })
}

function deleteActivity() {
  const id = document.getElementById("invisibleID").value
  axios.delete('http://localhost:3000/api/admin/activities/' + id, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  })
    .then((rs) => {
      console.log(rs);
      if (rs.data.success) {
        alert(rs.data.message)
        refreshPage()
      } else {
        alert(rs.data.message)
        refreshPage()
      }
    })
}

$(document).ready(function () {
  findActivity();
  $('#menuTable').DataTable();
});

function changeAcivityByID() {
  const id = document.getElementById("invisibleID").value
  console.log(id);
  axios.put('http://localhost:3000/api/admin/activities/' + id, {
    date: document.getElementById("updateDate").value,
    title: document.getElementById("updateTitle").value,
    description: document.getElementById("updateDescription").value,
    timeStart: document.getElementById("updateTimeStart").value,
    timeFinish: document.getElementById("updateTimeFinish").value,
    place: document.getElementById("updatePlace").value
  }, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  })
    .then((rs) => {
      if (rs.data.success) {
        alert(rs.data.message);
        refreshPage()
      } else {
        alert(rs.data.message)
        refreshPage()
      }
    })
}

function thongBao(id) {
  console.log(id);
  axios.get('http://localhost:3000/api/admin/activities/sendnoti/'+id, {
    headers: { Authorization: 'Bearer ' + localStorage.token }
  })
    .then((rs) => {
      console.log(rs);
      if (rs.data.status==="ok") {
        alert(rs.data.msg);
      } else {
        alert(rs.data.msg);
      }
      //refreshPage();               
    })
}