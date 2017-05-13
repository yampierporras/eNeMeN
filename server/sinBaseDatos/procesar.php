<?php

$codigoArea = file_get_contents('php://input');
$resumen = json_decode($codigoArea, true);

$textRes = $resumen['textRes'];

$arrFilas = preg_split('/\n/', $textRes);
$response = array();

//Variables contadores
$nroSubtitulo = 0;

for ($i=0; $i < count($arrFilas) ; $i++) {

    $comando = substr($arrFilas[$i], 0, 1);
    // print_r($comando);

    switch ($comando) {
        case '.'://TITULO
            $arrPar = array();
            $content = substr($arrFilas[$i], 1, strlen($arrFilas[$i])-1);
            $content = htmlentities($content);
            $arrPar['toHtml'] = '<h1>'.$content.'</h1>';
            array_push($response, $arrPar);
            break;
        case ':'://SUBTITULO
            $arrPar = array();
            $content = substr($arrFilas[$i], 1, strlen($arrFilas[$i])-1);
            $nroSubtitulo ++;
            $content = htmlentities($content);
            $arrPar['toHtml'] = '<h3>'.$nroSubtitulo.'. '.$content.'</h3>';
            array_push($response, $arrPar);
            break;
        case '-'://LISTA CON ELEMENTOS
            $arrPar = array();
            //Partiendo subtitulo y elementos de la lista
            $content = substr($arrFilas[$i], 1, strlen($arrFilas[$i])-1);
            $arrContent = preg_split('/:/', $content);
            $arrPar['toHtml'] = '<h5>'.$arrContent[0].':</h5>';
            array_push($response, $arrPar);
            //Armando las listas
            $arrPar = array();
            $liContent = preg_split('/,/', $arrContent[1]);
            $arrPar['toHtml'] = '<ul>';
            for ($j=0; $j < count($liContent); $j++) {
                // $liContent[$j] = sustituir($liContent[$j], '<');
                // $liContent[$j] = sustituir($liContent[$j], '>');
                $liContent[$j] = htmlentities($liContent[$j]);
                $arrPar['toHtml'] .= '<li>'.$liContent[$j].'</li>';
            }
            $arrPar['toHtml'] .= '</ul>';
            array_push($response, $arrPar);
            break;
        case '*'://OJO
            $arrPar = array();
            $content = substr($arrFilas[$i], 1, strlen($arrFilas[$i])-1);
            $content = htmlentities($content);
            $arrPar['toHtml'] = '<p><mark>'.$content.'</mark></p>';
            array_push($response, $arrPar);
            break;
        case ';'://Codigo de bloque
            $arrPar = array();
            $content = substr($arrFilas[$i], 1, strlen($arrFilas[$i])-1);
            $content = htmlentities($content);
            $arrPar['toHtml'] = '<pre><code>'.$content.'</code></pre>';
            array_push($response, $arrPar);
            break;
        case null:
            #nothing happen
            break;
        default://PARRAFO SIMPLE
            $arrPar = array();
            $content = $arrFilas[$i];
            $content = htmlentities($content);
            $arrPar['toHtml'] = '<p>'.$content.'</p>';
            array_push($response, $arrPar);
            break;
    }

}
print_r(json_encode($response));
 ?>
