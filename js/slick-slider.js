$(document).ready(function(){
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 4000, // 画像の表示時間を4秒に設定
      arrows: false, // 左右の矢印ボタンを非表示にする
      infinite: true, // スライドが最後まで行ったら最初に戻る（デフォルト設定）
      fade: true,
      speed: 850
    });
  });
  