function sortBy(sortByValueInner) {
    switch (sortByValueInner) {
      case "1":
        console.log("Sorting by name ascending");
        dataArrayCurrent.sort(function (a, b) {
          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
        break;
      case "2":
        console.log("Sorting  by price ascending");
        dataArrayCurrent.sort(function (a, b) {
          return a.price - b.price;
        });
        break;
      case "3":
        console.log("Sorting  by price descending");
        dataArrayCurrent.sort(function (a, b) {
          return b.price - a.price;
        });
        break;
      case "4":
        console.log("Sorting  by weight ascending");
        dataArrayCurrent.sort(function (a, b) {
          return a.weight - b.weight;
        });
        break;
      case "5":
        console.log("Sorting  by weight descending");
        dataArrayCurrent.sort(function (a, b) {
          return b.weight - a.weight;
        });
        break;
      case "6":
        console.log("Sorting  by weight ascending");
        dataArrayCurrent.sort(function (a, b) {
          return a.quantity - b.quantity;
        });
        break;
      case "7":
        console.log("Sorting  by weight descending");
        dataArrayCurrent.sort(function (a, b) {
          return b.quantity - a.quantity;
        });
        break;
      default:
        console.log("Sorting error!");
        break;
    }
    createCards();
  }