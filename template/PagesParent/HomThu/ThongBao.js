const host = 'http://localhost:3000'
axios.get(host + '/api/parent/mail', {
  headers: { Authorization: 'Bearer ' + localStorage.token }
}).then(result => {
  if (result.data.status === 'ok') {
    console.log(result);
    let mails = result.data.mails;
    let info = " ";
    $.each(mails, function (index, value) {
      info += `
      <div class="col-lg-12 grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          <a href="ChiTiet.html">
              <p class="card-title">
                  <b>[${value.category}] </b>
                  <h3>${value.title} </h3>
              </p>
              </a>    
              <p> ${new Date(value.date).getDate()}/${new Date(value.date).getMonth() + 1}/${new Date(value.date).getFullYear()} </p>
          </div>                       
      </div>                   
  </div>      
            `;
    });
    $('#information').html(info);
    
  }
})
