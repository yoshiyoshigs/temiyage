<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- Bootstrapの定形コード… -->
    <div class="card-body">
        <div class="card-title">
            登録フォーム
        </div>
        <!-- バリデーションエラーの表示に使用-->
    	@include('common.errors')
        <!-- バリデーションエラーの表示に使用-->
        <!-- 登録フォーム -->
        <form action="/items/store" method="POST" class="form-horizontal">
            {{ csrf_field() }}
            <!-- 商品名 -->
            <div class="form-group">
                商品名
                <div class="col-sm-6">
                    <input type="text" name="item_name" class="form-control">
                </div>
            </div>
            <!-- 商品説明 -->
            <div class="form-group">
                商品説明
                <div class="col-sm-6">
                    <input type="text" name="item_desc" class="form-control">
                </div>
            </div>
            <!-- 商品画像 -->
            <div class="form-group">
                商品画像
                <div class="col-sm-6">
                    <input type="text" name="item_image" class="form-control">
                </div>
            </div>
            <!-- 価格 -->
            <div class="form-group">
                価格
                <div class="col-sm-6">
                    <input type="text" name="price" class="form-control">
                </div>
            </div>
            <!--　登録ボタン -->
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-6">
                    <button type="submit" class="btn btn-primary">
                        Save
                    </button>
                </div>
            </div>
        </form>
    </div>
</body>
</html>
