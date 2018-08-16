<?php
namespace  App\Models\Payment;

class Invoice
{
    const STATUS_COMPLETE = "complete";
    const STATUS_CANCELLED = "cancelled";
    const STATUS_PENDING="pending";
    const STATUS_FAILED="failed";

    private $id = "";
    private $customer_id = "";
    private $status = self::STATUS_PENDING;
    private $creation_time = "";
    private $exchange_rate = 1;
    private $currency = "USD";
    private $purchase;
    private $unique_id;

    public function __construct()
    {
        $this->creation_time = time();
    }

    public function setUniqueId($id)
    {
        $this->unique_id = $id;
    }

    public function setCreationTime($time)
    {
        $this->creation_time = $time;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setCustomerId($id)
    {
        if(!is_numeric($id) || $id <= 0)
            throw new Exception("Invalid CustomerID");

        $this->customer_id = $id;
    }

    public function setCurrency($currency)
    {

        $this->currency=$currency;
    }

    public function setExchangeRate($rate)
    {
        if(!is_numeric($rate) || $rate <= 0)
            throw new Exception("Invalid arguments");

        $this->exchange_rate = $rate;
    }

    public function setStatus($status)
    {
        if(!in_array($status, [self::STATUS_COMPLETE, self::STATUS_PENDING, self::STATUS_CANCELLED, self::STATUS_FAILED]))
            throw new Exception("Invalid Status");

        $this->status = $status;
    }

    public function setPurchase(array $data)
    {
        $this->purchase = $data;
    }
}