document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('회원가입 신청이 완료되었습니다!');
});

document.querySelector('.btn-cancel').onclick = () => {
    if(confirm('가입을 취소하시겠습니까?')) location.reload();
};

/**
 * 
 */