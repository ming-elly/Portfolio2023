$(document).ready(function(){
    $('.slider-1').slick({
      autoplay: true,
      autoplaySpeed: 4000, // 画像の表示時間を4秒に設定
      arrows: false, // 左右の矢印ボタンを非表示にする
      infinite: true, // スライドが最後まで行ったら最初に戻る
      pauseOnHover: false,
      pauseOnFocus: false,
      fade: true,
      speed: 850
    });

    $('.slider-2').slick({
      autoplay: true,
      autoplaySpeed: 4000, // 画像の表示時間を4秒に設定
      arrows: false, // 左右の矢印ボタンを非表示にする
      infinite: true, // スライドが最後まで行ったら最初に戻る
      pauseOnHover: false,
      pauseOnFocus: false,
      fade: true,
      speed: 850
    });
    
    $('.a4-slider').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 3,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev">&laquo;</button>',
      nextArrow: '<button type="button" class="slick-next">&raquo;</button>',
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });  