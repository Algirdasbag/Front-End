function startMap() {
    const trakuPilis = { lat: 54.652362036447435, lng: 24.933642227366576 }; // Trakų pilies koordinatės
    const elektrenai = {lat: 54.79495076970124, lng: 24.662767869771496};


    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: trakuPilis,
    });

    let marker1 = new google.maps.Marker({
      position: trakuPilis,
      map,
      title: "Trakų pilis",
    });

    let marker2 = new google.maps.Marker({
        position: elektrenai,
        map,
        title: "Elektrenais",
    });

  }