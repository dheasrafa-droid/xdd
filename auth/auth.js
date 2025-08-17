const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

if(loginForm){
  loginForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Login sukses (placeholder)');
    window.location.href='../dashboard/dashboard.html';
  });
}

if(registerForm){
  registerForm.addEventListener('submit', e=>{
    e.preventDefault();
    alert('Register sukses (placeholder)');
    window.location.href='login.html';
  });
}
