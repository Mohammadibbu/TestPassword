const express = require('express');
const router = express.Router();

function checkPasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[\W_]/.test(password)) strength++;
    
    return strength;
}

router.get('/', (req, res) => {
    res.render('index', { strength: null });
});

router.post('/check-password', (req, res) => {
    const password = req.body.password;
    const strength = checkPasswordStrength(password);
    res.render('index', { strength });
});

module.exports = router;
