API_URL='https://ybdklqxalbyudmcxcfhy.supabase.co/rest/v1/'
API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliZGtscXhhbGJ5dWRtY3hjZmh5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU4NTQxNzcsImV4cCI6MTk4MTQzMDE3N30.rpkoMO_EkNyhu4l2cNZ3IIMBy8pkYUH5buonAdq9AP4'
let loginForm = document.getElementById('loginForm')
let login = document.getElementById('login');
let password = document.getElementById('password')
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const data ={
        login:login.value,
        password: password.value
    }
    fetch(`${API_URL}utilisateur?login=eq.${data.login}&password=eq.${data.password}&select=*`,{
        headers:{
            apiKey:API_KEY,
            "Content-type":"application/json"
        }
    }).then(response=>response.json())
      .then((candidat)=>{     
        if(candidat.length == 0){
             console.log('non connecte');   
        }else{
           localStorage.setItem('userConnecte',JSON.stringify(candidat[0]))  
           if(candidat[0].profil =='utilisateur_simple'){
            location.href ='../../courses.html';
           }else{
            location.href ='../../instructeur.html';
           }
        }
      })  
})