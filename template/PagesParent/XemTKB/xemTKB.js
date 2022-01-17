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