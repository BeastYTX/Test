// Member profile password validation
document.getElementById('profileForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    const member = urlParams.get('member');
    const password = document.getElementById('profilePassword').value;
    const memberData = {
        'Waris': { password: 'Sachinrahutendulkar', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' },
        'AyanShahid': { password: 'JomnyDick', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' },
        'Riyazudeen': { password: 'Riyaz', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' },
        'Faris': { password: 'FARIS@123', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' },
        'Rehan': { password: 'agent', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' },
        'Paramveer': { password: 'param123', position: 'Position: Not settled', nobleRank: 'Noble Rank: Not settled' }
    };

    if (memberData[member] && password === memberData[member].password) {
        document.getElementById('profileForm').style.display = 'none';
        document.getElementById('profileInfo').style.display = 'block';
        document.getElementById('position').textContent = memberData[member].position;
        document.getElementById('nobleRank').textContent = memberData[member].nobleRank;
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
