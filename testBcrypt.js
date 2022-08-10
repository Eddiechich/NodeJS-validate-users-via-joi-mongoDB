const bcrypt = require('bcrypt');
async function good () {
    const saltRounds =5;
    const password = '121212 ';
    try {
        encryptedPassword = await bcrypt.hash(password, saltRounds)
        console.log(encryptedPassword);
    } catch (err){
        console.log("Something went wrong: ", err);
    }
    let result = await bcrypt.compare(password, '$2b$05$3vDlDGlbA/n6zstRkoudjOhTKnKAZ/KbP0bCmS6.y7HpfZNrilQcO');
    console.log(result);
     result = await bcrypt.compare(password, '$2b$05$qVT.0Sxk1/W0cI2SOoFKOekXlMQey/7wxI/BKM00LWtapN4oeBnvO');
    console.log(result);
     result = await bcrypt.compare(password, '$2b$05$84D/sAzx7Y9I1OmAMpY8H.IxvvIZ10tWgdaGiLVG6JHPJAaWR1Wtq');
    console.log(result);
}

good()