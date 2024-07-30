// Landing page password validation
document.getElementById('landingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const password = document.getElementById('landingPassword').value;
    if (password === 'sipri1') {
        window.location.href = 'members.html';
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Member profile password validation
document.getElementById('profileForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const member = urlParams.get('member');
    const password = document.getElementById('profilePassword').value;
    const memberData = {
        'Waris': { password: 'Sachinrahutendulkar', position: 'Not settled', nobleRank: 'Not settled' },
        'AyanShahid': { password: 'JomnyDick', position: 'Not settled', nobleRank: 'Not settled' },
        'Riyazudeen': { password: 'Riyaz', position: 'Not settled', nobleRank: 'Not settled' },
        'Faris': { password: 'FARIS@123', position: 'Not settled', nobleRank: 'Not settled' },
        'Rehan': { password: 'agent', position: 'Not settled', nobleRank: 'Not settled' },
        'Paramveer': { password: 'param123', position: 'Not settled', nobleRank: 'Not settled' }
    };

    if (memberData[member] && password === memberData[member].password) {
        document.getElementById('profileForm').style.display = 'none';
        document.getElementById('profileInfo').style.display = 'block';
        document.getElementById('position').textContent = `Position: ${memberData[member].position}`;
        document.getElementById('nobleRank').textContent = `Noble Rank: ${memberData[member].nobleRank}`;
    } else {
        alert('Incorrect password. Please try again.');
    }
});

// Display member name on profile page
const urlParams = new URLSearchParams(window.location.search);
const member = urlParams.get('member');
if (member) {
    document.getElementById('memberName').textContent = member;
}
