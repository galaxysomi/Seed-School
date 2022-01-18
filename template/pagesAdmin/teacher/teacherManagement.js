function findTeacher() {
  axios.get("http://localhost:3000/api/admin/teacher")  // dien link api vao
    .then((teacher) => {
      console.log(teacher);
      let info = " ";
      $.each(teacher.data, function (index, value) {
        info += `
          <tr>
            <td> ${index} </td>
            <td> ${value.name} </td>
            <td> ${value.age}   </td>                        
            <td> ${value.SDT}</td>
            <td> ${value.class}</td>
            <td> ${value._id}</td>
            <td>
            <button style="margin-top: 20px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#changeTeacher">
            Sửa
            </button>
            <button style="margin-top: 20px;" type="button" class="btn btn-danger" data-toggle="modal" data-target="#deleteTeacher">
            Xóa
            </button>      
            </td>                                
          </tr>            
           `
      });
      $('#information').html(info);
    });
}

$(document).ready(findTeacher());


function addTeacher() {
  axios.post('', {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    sex: document.getElementById("sex").value,
    class: document.getElementById("class").value,
    number: document.getElementById("phoneNumber").value
  })
    .then((rs) => {
      console.log(rs.data);
      if (rs.data.success == true) {
        alert("Thêm thành công");
      }
      if (rs.data.suscess == false) {
        alert("Không thành công");
      }
      refreshPage();
    })
}

function deleteTeacher(id) {
  axios.delete('' + id)
    .then((rs) => {
      console.log(rs);
      if (rs.data.susccess) {
        alert("Xóa thành công")
        refreshPage();
      }
    })
}

function getTeacherById(id) {
  axios.get('' + id).then(data => {
    document.getElementById("changeName").value = data.data.name;
    document.getElementById("changeAge").value = data.data.age;
    document.getElementById("changeSex").value = data.data.sex;
    document.getElementById("changeClass").value = data.data.class;
    document.getElementById("changeNumber").value = data.data.number;
    document.getElementById("invisibleID").value = id;
  })
}

function changeTeacherByID() {
  const id = document.getElementById("invisibleID").value;
  console.log(id);
  axios.put(' ' + id, {
    name: document.getElementById("changeName").value,
    age: document.getElementById("changeAge").value,
    sex: document.getElementById("changeSex").value,
    class: document.getElementById("changeClass").value,
    number: document.getElementById("changePhoneNumber").value
  })
    .then((rs) => {
      console.log(rs.data);
      if (rs.data.success == true) {
        alert("Sửa thành công");
      }
      if (rs.data.suscess == false) {
        alert("Không thành công");
      }
      refreshPage();

    })

}