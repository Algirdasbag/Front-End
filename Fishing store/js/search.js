
$("#searchInput").keyup(function () {
    let searchText = $(this).val();
    let foundProducts = [];
    if(searchText){
        foundProducts = dataArrayInitial.filter(x => x.name.toLowerCase().includes(searchText.toLowerCase()));
    }
    displayTypeheadResults(foundProducts);
  });
  
  function displayTypeheadResults(results){
    let h =``;
    results.forEach(x => {
        h+= `
        <div class='found-prod'>${x.name} id: ${x.price}
        </div>
        `;
    });
     $("#searchResults").html(h);
  }