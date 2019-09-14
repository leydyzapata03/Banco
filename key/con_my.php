<?php

class mySqlConnect{

function ConectarPM($query)
{

$db = mysqli_init();
//$query = "SELECT * FROM persona";

//mysqli_options ($db, MYSQLI_OPT_SSL_VERIFY_SERVER_CERT, true);


        $link = mysqli_real_connect($db, 
                            'localhost', 
                            'root',
                            '',
                            'gestion_banco');
$db->set_charset('utf8');
if ($link)
{
   
   $result=$db->query($query);
      
   return $result;

   DesconectarPM($link,$result);
      
}

else
{
        return false;
}

}


function DesconectarPM($link, $stmt)
{
		/* Free statement and connection resources. */
		mysqli_free_result($stmt);
		mysqli_close($link);

	}


}



?>
