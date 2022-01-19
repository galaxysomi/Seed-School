if(typeof(localStorage.getItem("token"))){
let host = 'http://localhost:3000'
    axios.post(host + '/api/admin/login/check', {}, {
            headers: { Authorization: 'Bearer ' + localStorage.token }
        }
        ).then(rs => {
            if (!rs.data.success) {
                window.localStorage.clear();
                window.location = "http://127.0.0.1:5533/LoginAdmin/LoginAdmin.html"
            }
        })
    }