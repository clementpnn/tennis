<?php
$game = true;
$i = 1;
$setp1 = 0;
$setp2 = 0;

$data = array($_POST['p1'], $_POST['p2']);

while ($game == true) {

    $set = true;

    $pp1 = 0;
    $pp2 = 0;

    $listPoins = array();
    $listState = array();

    if(($setp1 < 3) && ($setp2 < 3)) {

        while ($set == true) {

            if($_POST['player'.$i] == "player1") {
                $pp1 += 1;
                
            } else {
                $pp2 += 1;
            }

            array_push($listPoins, $pp1, $pp2);

            if(($pp1 >= 4) && ($pp1 == $pp2 + 1)) {
                array_push($listState, "AV", "-");

            } elseif (($pp2 >= 4) && ($pp2 == $pp1 + 1)) {
                array_push($listState, "-", "AV");

            } elseif (($pp1 >= 4) && ($pp1 == $pp2)) {
                array_push($listState, "40", "40");

            } elseif (($pp1 == 6) && ($pp1 >= $pp2 + 2)) {
                array_push($listState, "SET", "-");
                $setp1 += 1;
                $set = false;

            } elseif (($pp2 == 6) && ($pp2 >= $pp1 + 2)) {
                array_push($listState, "-", "SET");
                $setp2 += 1;
                $set = false;

            } elseif ($pp1 == 7) {
                array_push($listState, "SET", "-");
                $setp1 += 1;
                $set = false;

            } elseif ($pp2 == 7) {
                array_push($listState, "-", "SET");
                $setp2 += 1;
                $set = false;

            } elseif(($pp1 < 6) && ($pp2 < 6)) {
                array_push($listState, $pp1*15, $pp2*15);

            } elseif(($_POST['player'.$i] == "player2") && ($pp1 < 6) && ($pp2 < 6)) {
                array_push($listState,$pp1*15, $pp2*15);

            } elseif(($pp1 >= 6) && ($pp2 >= 6)) {
                array_push($listState, $pp1, $pp2);

            } else {
                array_push($listState, "Error");
            }

            $i += 1;
        }
        array_push($data, $listPoins, $listState);
    } else {
        if($setp1 == 3) {
            array_push($data, "Gagner", "Perdu");  
        } else {
            array_push($data, "Perdu", "Gagner");
        }
        $game = false;
    }
}

if ($game == false) {
    header('Content-Type: application/json; charset=UTF-8');
    $json = json_encode($data);
    $file = file_put_contents("api.json", $json);
    echo $file;
    header("Location: match.html");
}
?>