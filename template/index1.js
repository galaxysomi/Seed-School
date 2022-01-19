const host = 'http://localhost:3000'
axios.get(host + '/api/parent/student', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    const student = result.data.student;
    const teacher = student.teacher;
    console.log(result.data);
    let infoStudent = " ";
    const parent = result.data.parent
    let infoParent = " ";

    infoStudent += `
                <div class="col-lg-4 grid-margin">
                <div style="position: absolute;">
                  <img style="position: relative;width: 200px;height: 200px; left: 20px;border-radius: 50%;" src="https://kenh14cdn.com/2016/photo-1-1466407298127.jpg" alt="">
                </div>
              </div>
              <div class="col-lg-8 grid-margin " >
                <div class="card">
                  <ul style="margin-top: 20px;">
                    <li>Họ và tên : ${student.name} </li>
                    <li>Ngày sinh : ${convertDateToString(student.birth)}</li>
                    <li>Mã học sinh : ${student._id}</li>
                    <li>Lớp : ${teacher.className}</li>                                    
                    <li> Địa chỉ : ${result.data.parent.address} </li>                   
                    <li>Giới tính : ${student.sex}</li>                                    
                  </ul>
                </div>
              </div>
              <div class="col-lg-6 grid-margin style = "postion:absolute"  " style="margin-top : 20px ">             
                <div class="card">
                
                <div class = "card-body" >
                <h3 class="card-title" style = "margin-left : 40px;" > Thông tin phụ huynh </h3>
                  <ul style="margin-top: 20px;">
                    <li >Họ và tên : ${parent.name} </li>
                    <li >Ngày sinh : ${convertDateToString(parent.birth)}</li>
                    <li>Điện thoại :${parent.phoneNumber}</li>
                    <li>Giới tính : ${parent.sex}</li>
                    <li> Địa chỉ : ${result.data.parent.address} </li>                   
                  </ul>
                </div>
                </div>             
              </div>
              <div class="col-lg-6 grid-margin style = "postion:absolute" " style="margin-top : 20px ">             
                <div class="card">
                
                <div class = "card-body" >
                <h3 style = "margin-left : 40px;" class="card-title"  > Thông tin giáo viên </h3>
                  <ul style="margin-top: 20px;">
                    <li >Họ và tên giáo viên : ${teacher.name} </li>
                    <li >Ngày sinh : ${convertDateToString(teacher.birth)}</li>
                    <li>Điện thoại :${teacher.phoneNumber}</li>
                    <li>Giới tính : ${teacher.sex}</li>
                    <li>Lớp: ${teacher.className} </li>     
                </div>                
                  </ul>
                </div>             
              </div>                                                
                 `
    $('#studentInformation').html(infoStudent);




  }
})


function convertDateToString(date) {
  const d = new Date(date)
  var curr_date = d.getDate();
  var curr_month = d.getMonth() + 1; //Months are zero based
  var curr_year = d.getFullYear();
  return curr_date + "/" + curr_month + "/" + curr_year
}







