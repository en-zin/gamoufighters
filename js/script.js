$(function () {
	$(".slide").slick({
		accessibility: false,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 3500,
		fade: true,
		zIndex: 0,
		default: false,
	});
});


$(".header_burger_btn").on("click", function () {
	$(".header_burger_btn").toggleClass("close");
	$(".header_nav").fadeToggle(500);
	$("body").toggleClass("noscroll");
});


$(function(){
  // #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function () {
		$(".header_burger_btn").toggleClass("close");
		$(".header_nav").fadeToggle(500);
		$("body").toggleClass("noscroll");
		// 移動先を0px調整する。0を30にすると30px下にずらすことができる。
		let adjust = 48;
		// スクロールの速度
		let speed = 400; // ミリ秒
		// アンカーの値取得
		let href = $(this).attr("href");
		// 移動先を取得
		let target = $(href == "#" || href == "" ? "html" : href);
		// 移動先を調整
		let position = target.offset().top - adjust;
		// スムーススクロール
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});

});

$(function(){
  // #で始まるアンカーをクリックした場合に処理
	$('a[href^=""]').click(function () {
		// 移動先を0px調整する。0を30にすると30px下にずらすことができる。
		let adjust = 48;
		// スクロールの速度
		let speed = 400; // ミリ秒
		// アンカーの値取得
		let href = $(this).attr("href");
		// 移動先を取得
		let target = $(href == "#" || href == "" ? "html" : href);
		// 移動先を調整
		let position = target.offset().top - adjust;
		// スムーススクロール
		$("body,html").animate({ scrollTop: position }, speed, "swing");
		return false;
	});

});
