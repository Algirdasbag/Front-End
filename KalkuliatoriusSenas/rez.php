<?php
function skaiciuojame() {

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        // papausta submit
        // patikriname ar ivestas vardas
        if(empty($_POST['first'])) {
            // laukas tuscias // klaida
        ?> <script>alert('Laukas yra privalomas!');</script><?php
                } else {
            
                // $atsArray = array();
                $nr1 = $_POST['first'];
                $nr2 = $_POST['second'];
                $veiksm = $_POST['veiksmas'];
                // echo "Veiksmas yra " . $veiksm;
                // echo "<br>";
                
                echo '<h3 style="text-align:center;">Rezultatas:</h3>';
                echo '<div class="rezultatas">';
                                
                if($veiksm === '*') {
                    $rez = $nr1 * $nr2;
                    echo "Daugybos rezultatas lygus: <br>" . $nr1 . $veiksm . $nr2 . " = " . $rez . '<br>';
                    // array_push($atsArray, $rez);
                    // print_r($atsArray);
                } else if($veiksm === ':') {
                    $rez = $nr1 / $nr2;
                    echo "Dalybos rezultatas lygus: <br>" . $nr1 . $veiksm . $nr2 . " = " . $rez;
                } else if($veiksm === '+') {
                    $rez = $nr1 + $nr2;
                    echo "Sudėties rezultatas lygus: <br>" . $nr1 . $veiksm . $nr2 . " = " . $rez;
                } else if($veiksm === '-') {
                    $rez = $nr1 - $nr2;
                    echo "Atimties rezultatas lygus: <br>" . $nr1 . $veiksm . $nr2 . " = " . $rez;
                } else if($veiksm === 'x2') {
                    $rez = $nr1 * $nr1;
                    echo $nr1 . " pakelta kvadratu = " . $rez;
                };
                echo '</div>';

                    
        }
    }
}
?>