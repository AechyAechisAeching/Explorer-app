const userid_el = document.querySelector('#userid span');

    const length = 12;
    const chars = "1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ";
              
    function generateUserID() {
    let userid = "#";
    for (let i = 0; i < length; i++) {
    
        let rand = Math.floor(Math.random() * chars.length);
        userid += chars.substring(rand, rand + 1);
    }
    return userid;
    }
    userid_el.textContent = generateUserID();