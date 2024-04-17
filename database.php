<?php


class Database
{
    private $dbh;
    public function connection() {

        $this->dbh = new PDO('mysql:host=localhost;dbname=theo_portfolio', 'theo', 'plop');

    }

    public function selectAll($table) {
        $this->connection();
        $sql = "SELECT * FROM ".$table;
        $sth = $this->dbh->query($sql);
        
        $results=$sth->fetchAll(PDO::FETCH_ASSOC);

        return $results;

    }

    public function find($table,$id) {
        $this->connection();
        $sql = "SELECT * FROM ".$table." WHERE id=".$id;
        $sth = $this->dbh->query($sql);
        return $sth->fetch  ();
    }
}