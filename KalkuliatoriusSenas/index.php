<?php
include('rez.php');
setcookie('kalba', 'lt', time()+3600);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
    <title>CALC</title>
</head>
<body>

<!-- <img class="calc1" src="calc.png" alt="Kalkuliatorius"></img> -->
<!-- <img class="calc2" src="calc2.png" alt="Kalkuliatorius"></img> -->

<!-- <div class="calc2">

</div> -->
<div class="calc">
<i class="fa fa-calculator" style="font-size:60px;color:blue;"></i>
<!-- KALKULIATORIUS -->
</div>

    <div class="container">
        <form action="index.php" method="POST">
            1-asis skaičius: 
            <input
            type="number" 
            class="first" 
            name="first" 
            placeholder="Įveskite 1-jį skaičių: "
            >
            
            <!-- <label for="veiksmas">Pasirinkite veiksmą:</label>
            <select id="veiksmas" name="veiksmas">
                <option value="*">*</option>
                <option value=":">:</option>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="^">x2</option>
            </select> -->
            <br><br>
            <label for="veiksmas">Pasirinkite veiksmą:</label>
            <br>
                <input type="radio" name="veiksmas" value='*'>* daugyba</input><br>
                <input type="radio" name="veiksmas" value=':'>: dalyba</input><br>
                <input type="radio" name="veiksmas" value='+'>+ sudėtis</input><br>
                <input type="radio" name="veiksmas" value='-'>- atimtis</input><br>
                <input type="radio" name="veiksmas" value='x2'>x2 kėlimas kvadratu</input><br>
      
            <br>
            2-asis skaičius: 
            <input
            type="number" 
            class="second" 
            name="second" 
            placeholder="Įveskite 2-jį skaičių: "
            >
            <br><br>
            <button type="submit" style="display: center">Apskaičiuoti</button>
            <br>
        </form>
    </div>

<?php return(skaiciuojame()); ?>

</body>
</html>