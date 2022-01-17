

const host = 'http://localhost:3000'
axios.get(host + '/api/parent/logbook', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    const logbooks = result.data.logBooks ;
    console.log(result.data);

  
    let info = " ";
          $.each(logbooks, function (index, value) {
            let trongMuon ;
            if(value.lookAfterLate1 == 0 && value.lookAfterLate2 ==0){
              trongMuon = "Không";
            }
            else if (value.lookAfterLate1 ==1){
              trongMuon = "Từ 5h30 đến 6h30"
            }
            else if(value.lookAfterLate2 ==1){
              trongMuon = "Sau 6h30"
            }
            info += `
            <div class="col-lg-7 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Sổ theo dõi</h4>                  
                </p>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th>Tên học sinh</th>
                        <th>${value.student.name}</th>                       
                      </tr>
                    </thead>
                    <tbody>                     
                      <tr>
                        <td>Ngày</td>
                        <td>${new Date(value.date).getDate()}/${new Date(value.date).getMonth()+1}/${new Date(value.date).getFullYear()}</td>                                                     
                      </tr>
                      <tr>
                        <td>Trông muộn</td>
                        <td> ${trongMuon} </td>                                                     
                      </tr>
                      <tr>
                        <td>Nhận xét</td>
                        <td>${value.comment}</td>                                                     
                      </tr>                                  
                      <tr>
                        <td>Trạng thái</td>`;
                        if(value.lateForSchool1 == 0 && value.lateForSchool2 ==0){
              info += `
              <td><label class="badge badge-success" id="statusText">Đi học</label></td>           
             `
            }
            else if(value.lateForSchool1 == 1){
              info += `
              <td><label class="badge badge-primary" id="statusText">Nghỉ có phép</label></td>              
             `
            }
            else if(value.lateForSchool2 == 1){
              info += `
              <td><label class="badge badge-primary" id="statusText">Nghỉ không phép</label></td>              
             `
            }          
            info += `                          
                      </tr>                                                                                                           
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Ảnh điểm danh</h4>                  
                </p>
                <div class="table-responsive" style="position: absolute;">
                  <img id="anhDiemDanh" src="${value.anhDiemDanh}" alt="">                                           
                </div>
              </div>
            </div>
          </div>         
             `
             
          });         
          $('#information').html(info);
  }
})

        
          
    
     

     