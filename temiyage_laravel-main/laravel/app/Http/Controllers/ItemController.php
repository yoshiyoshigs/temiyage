<?php

namespace App\Http\Controllers;
use App\Item;
use App\Post;
use App\User;

use Illuminate\Http\Request;

class ItemController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $items = Item::all();
        return response()->json([
            'message' => 'ok',
            'data' => $items
        ], 200, [], JSON_UNESCAPED_UNICODE);
        // return view('test', ['data' => $items]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $items = Item::create($request->all());
        return response()->json([
            'message' => 'Item created successfully',
            'data' => $items
        ], 201, [], JSON_UNESCAPED_UNICODE);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $item = Item::find($id);
        if($item){
            return response()->json([
                'message' => 'ok',
                'data' => $item
            ], 200, [], JSON_UNESCAPED_UNICODE);
        }else {
            return response()->json([
                'message' => 'Item not found',
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $update = [
            'item_name' => $request->item_name,
            'item_desc' => $request->item_desc,
            'item_image' => $request->item_image,
            'price' => $request->price
        ];
        $item = Item::where('id', $id)->update($update);
        if($item){
            return response()->json([
                'message' => 'Item updated successfully',
            ], 200);
        }else {
            return response()->json([
                'message' => 'Item not found',
            ], 404);
        }
    }
        


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $item = Item::where('id', $id)->delete();
        if ($item){
            return response()->json([
                'message' => 'Item deleted successfully',
            ], 200);
        }else {
            return response()->json([
                'message' => 'Item not found',
            ], 404);
        }
    }
}
