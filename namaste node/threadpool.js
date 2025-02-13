const fs = require('fs');
const crypto = require('crypto');
const log = console.log;

process.env.UV_THREADPOOL_SIZE = 2;

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    log('1 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    log('2 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    log('3 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    log('4 - cryptoPBKDF2 done');
});

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (err, key) => {
    log('5 - cryptoPBKDF2 done');
});
