// Avatar URL

function getAvatar(userid) {

}

// Wanted lekérés

function getWanted() {
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const apiUrl = 'https://api.devbeni.tech/api/mdt';

    fetch(proxyUrl + apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                if (item.wanted === "1") {
                    console.log(item);

                    const userid = item.user_id;

                    // Avatar URL

                    const item_image = fetch(proxyUrl + `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userid}&size=48x48&format=Png&isCircular=false`)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        var kep = data.data[0].imageUrl;
                        const item_megjegyzes = item.policemegjegyzesek;
                        const item_nev = item.nev;
                        const item_rendszam = item.rendszam;
    
                        console.log(kep)
                        console.log(item_nev);
                        console.log(item_megjegyzes);
                        console.log(item_nev);
                        console.log(item_rendszam);
                        console.log(userid);
    
                       // HTML-be megjelenítés
                       
                         const wanted = document.getElementById("wanted");
                            wanted.innerHTML += `
                        <div class="wanted">
                            <div class="wantedes">
                                <div class="wanted-image">
                                    <img src="${kep}" alt="Avatar">
                                </div>
                                <div class="wanted-info">
                                    <div class="wanted-info-name">
                                        <h3>${item_nev}</h3>
                                    </div>
                                    <div class="wanted-info-car">
                                        <p>Rendszáma:</p>
                                        <p>${item_rendszam}</p>
                                    </div>
                                    <div class="wanted-info-note">
                                        <p>Megjegyzés:</p>
                                        <p>${item_megjegyzes}</p>
                                    </div>
                               </div>
                            <div>
                        </div>
                            `;
                    });
                }
            });    
        });
}