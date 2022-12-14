const register = async()=>{
    let name=document.getElementById('name');
    let email=document.getElementById('email');
    let password=document.getElementById('password');
    let address=document.getElementById('address');
    let phone = document.getElementById('phone');
    let avatar = document.getElementById('avatar');
    let age = document.getElementById('age');
 



let body = new FormData();
    body.append('name', name.value);
    body.append('email', email.value);
    body.append('password', password.value);
    body.append('address', address.value);
    body.append('phone', phone.value);
    body.append('avatar', avatar.files[0]);
    body.append('age', age.value);

    try {
        let response = await fetch('/api/sessions/register', {
            method: 'POST',
            headers: {
                'enctype': 'multipart/form-data'

            },
            body: body,
        });
        let data = await response.json();
      
        if (data.status === 'success') {

           document.getElementById('createdUser').innerHTML = `<div class="alert alert-success text-center" role="alert">Usuario Creado</div>`;
              setTimeout(() => {
                window.location.href = '/login'
            }, 2000);
         
        }
    } catch (error) {
        document.getElementById('createdUser').innerHTML = `<div class="alert alert-danger text-center" role="alert">Error al crear usuario</div>`;
    }

}