function filterByType() {
    let checkBoxRites = document.getElementById("rites");
    let checkBoxSpiningai = document.getElementById("spiningai");
    let checkBoxMasalai = document.getElementById("masalai");
    let checkBoxValai = document.getElementById("valai");
  
    dataArrayType = [];
    let productsWhereAdded = false;
    dataArrayInitial.forEach((element) => {
      if (
        (checkBoxRites.checked == true && element.category == "ritės") ||
        (checkBoxSpiningai.checked == true && element.category == "spiningai") ||
        (checkBoxMasalai.checked == true && element.category == "masalai") ||
        (checkBoxValai.checked == true && element.category == "valai")
      ) {
        dataArrayType.push(element);
        productsWhereAdded = true;
      }
    });
  
    if (productsWhereAdded) {
      dataArrayCurrent = dataArrayType;
      createCards();
    } else {
      dataArrayCurrent = dataArrayInitial;
      createCards();
    }
  }
  
  let minValue = 0;
  let maxValue = 999;
  
  function filterByPrice() {
    let min = document.getElementById("from");
    let max = document.getElementById("to");
    minValue = min.value;
    maxValue = max.value;
    dataArrayPrice = [];
  
    dataArrayInitial.forEach((element) => {
      if (minValue <= element.price && maxValue >= element.price) {
        dataArrayPrice.push(element);
        productsWhereAdded = true;
      }
    });
    dataArrayCurrent = dataArrayPrice;
    createCards();
  }
  
  let slider = document.getElementById("multi");
  let output = document.getElementById("value");
  output.innerHTML = slider.value;
  slider.oninput = function () {
    output.innerHTML = this.value;
  };
  
  function filterByWeight() {
    dataArrayWeight = [];
  
    dataArrayInitial.forEach((element) => {
      if (slider.value >= parseFloat(element.weight)) {
        dataArrayWeight.push(element);
        productsWhereAdded = true;
      }
    });
    dataArrayCurrent = dataArrayWeight;
    createCards();
  }
  
  function resetFilters() {
    let resetFiltersDoc = document.getElementById("reset-filters");
    dataArrayCurrent = dataArrayInitial;
    document.getElementById("rites").checked = false;
    document.getElementById("spiningai").checked = false;
    document.getElementById("masalai").checked = false;
    document.getElementById("valai").checked = false;
    document.getElementById("multi").value = 100;
    output.innerHTML = "100";
    document.getElementById("from").value = 0;
    document.getElementById("to").value = 999;
    setView("grid");
    console.log("Reset filters!!!");
  }