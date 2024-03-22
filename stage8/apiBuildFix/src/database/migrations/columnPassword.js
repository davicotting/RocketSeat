
    const columnPassword = 
    [
        `
        ALTER TABLE users ADD COLUMN password TEXT;
        `
    ]


    module.exports = columnPassword;

    /* 
    adc coluna porque na hora 
    de criar o migrations eu 
    esqueci de por na tabela 
    */