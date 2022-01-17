var x = [
    {         
      name : 'Tung'  ,
      birthday : "12/09/01" ,         
      ID : "123456",
      class : "10a2",
      sex : "nam",
      address : 'tay son'
    },
    {
      name : 'Tung'  ,
      birthday : "12/09/01" ,         
      ID : "123456",
      class : "10a2",
      sex : "nam",
      address : 'tay son'
    }
  ]    
    // function findSoTheoDoi() {
    //   axios.post()  // dien link api vao
    //     .then((x) => {
          console.log(x);
          let info = " ";
          $.each(x, function (index, value) {
            info += `
            <tr>
              <td> ${index} </td>
              <td> ${value.name} </td>
              <td> ${value.birthday} </td>
              <td> ${value.id}   </td>                        
              <td> ${value.class}</td>
              <td> ${value.sex}</td>
              <td> ${value.address}</td>                
            </tr>            
             `            
          });         
          $('#information').html(info);
      //   });
      // }

      function submitSuccess(){
      alert("Submit thành công");
}      
function cancelSuccess(){
      alert("Cancel thành công");
}      