<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    //
    public function getAll(Request $request) {
        $cards = Card::all();
        return response()->json($cards);
    }

    //
    public function add(Request $request) {
        $errors = [];
        $date = date("Y-m-d");
        $data = $request->all();        

        $card_number = $data['number'];
        $card_year = $data['year'];
        $card_month = $data['month'];
        $card_cvv = $data['cvv'];
        $card_date = "$card_year-$card_month-1";
        $existed_card = Card::where('number', $card_number)->first();
        if(!is_numeric($card_number) || strlen($card_number) != 16){
            $errors['number'] = 'Incorrect card number';
        }
        if(!is_numeric($card_year) || !is_numeric($card_month) || $card_month < 1 || $card_month > 12  || date("Y-m-t", strtotime($card_date))<$date){
            $errors['date'] = 'Incorrect card date';
        }
        if(!is_numeric($card_cvv) || strlen($card_cvv) != 3){
            $errors['cvv'] = 'Incorrect card CVV';
        }
        
        if($existed_card){
            if($existed_card->year != $card_year || $existed_card->month != $card_month || $existed_card->cvv != $card_cvv){
                $errors['card'] = 'Card with the same number already exists';
            }
        }
        else{
            $card = new Card();
            $card->number = $card_number;
            $card->year = $card_year;
            $card->month = $card_month;
            $card->cvv = $card_cvv;
            $card->save();
        }

        if(!empty($errors)){
            return response()->json([
                'errors' => $errors
            ], 400);
        }
        return response()->json([
            'success' => $existed_card
        ]);
    }
}
