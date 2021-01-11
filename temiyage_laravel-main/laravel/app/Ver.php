<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Http\Controllers\API\VerController;

class Ver extends Model
{
    protected $table = 'ver';
    protected $dates =  ['created_at', 'updated_at'];
    protected $fillable = ['id', 'version', 'min_version'];
}
