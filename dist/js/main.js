/*
==============
JS for - Muhammad Adam Firdaus Personal Web 2017
Developed and Customized by
Muhammad Adam Firdaus
http://www.muhammadadamfirdaus.com/
==============
 */

$(function(){
	// PreLoad
	setTimeout(function removepreload(){
		$('#preload').hide();
		$('.container').css({'visibility':'visible'});
	}, 3000);

	// // Go To
	// $('a[href^="#"]').click(function() {
	// 	$('html,body').animate({
	// 		scrollTop: $(this.hash).offset().top
	// 	}, 1000);
	// 	return false;
	// });

	// RESPONSIVE STUFF
	function mobile(){
		var w = $(window).width();
		// General Mobile Devices
		if(w <= 800) {

		} else {


			// setTimeout(function(){
			// 	city.startAutoplay();
			// }, 100);
			// if (city.autoplaying) {
			//  city.getWrapperTranslate();
			// }
		}
	}

	mobile();

	var city = new Swiper('.svg-background', {
		autoplay: 1000,
		autoplayDisableOnInteraction: true,
		// autoplayStopOnLast: false,
		// freeMode: true,
		freeModeMomentum: false,
		freeModeMomentumRatio: 2,
		// freeModeSticky: true,
		freeModeMomentumBounce: false, // udah bener (prevent unwanted grey blank both side the city)
		freeModeMomentumBounceRatio: 0, //udah bener
		freeModeMinimumVelocity: 0.2,
		followFinger: true,
		grabCursor: true,
		// initialSlide: 2,
		longSwipes: true,
		longSwipesRatio: 1,
		loop: true,
		// loopAdditionalSlides: 2,
		// loopedSlides: 2,
		mousewheelControl: true,
		// mousewheelSensitivity: 1,
		// onTouchStart: function(s){
		// 	s.setWrapperTransition(0);
		// 	s.setWrapperTranslate(s.getWrapperTranslate());
		// },
		onAutoplay: function(){
			console.log('jalan');
		},
		onAutoplayStop: function(){
			setTimeout(function(){
				console.log('stop');
				// city.params.autoplay = 1000;
				// city.slideNext();
				city.startAutoplay();
			}, 1500);
		},
		// preventClicks: true,
		// preventClicksPropagation: true,
		resistanceRatio: 1,
		shortSwipes: false,
		simulateTouch: true,
		slidesPerView: 'auto',
		slideToClickedSlide: true,
		spaceBetween: -5,
		speed: 60000,
		// swipeHandler: 'svg',
		touchMoveStopPropagation: true,
		touchRatio: 6,
		threshold: 1
	});

	if($('.audio').length) {
		var playing = false;

		$('#audio').on('click', function(){
			if(playing == false) {
				console.log('mati');
				playing = true;
				$('#player')[0].pause();
				$('.audio').addClass('audio-mute');
			} else {
				console.log('hidup');
				playing = false;
				$('#player')[0].play();
				$('.audio').removeClass('audio-mute');
			}
		});
	}

	$('.door').on('mouseenter click', function(e){
		e.preventDefault();
    e.stopImmediatePropagation();
		console.log('pintu');
		var closedyangmuncul = $(this).parent().find('.pintu');
		closedyangmuncul.not(closedyangmuncul).removeClass('closed');
		closedyangmuncul.addClass('closed');

		setTimeout(function(){
			closedyangmuncul.removeClass('closed');
		}, 1500);
	});

	var pintuClosed = $('svg #door-shop, svg #door-martabucks');

	$(pintuClosed).on('click', function(){
		$(this).addClass('door-closed');
		console.log('it\'s locked');
		setTimeout(function(){
			pintuClosed.removeClass('door-closed');
			console.log('door-closed disappear');
		}, 3000);
	});

	// orang
	function orang(){
		setTimeout(function orang2(){
			$('.orang:nth-of-type(2)').addClass('orang-2');
			console.log('hadir orang ke 2');
		}, 7000);

		setTimeout(function orang3(){
			$('.orang:nth-of-type(3)').addClass('orang-3');
			console.log('hadir orang ke 3');
		}, 10000);
	}

	orang();

	// munculin dialog box di awal
	function dialogueUp(){
		setTimeout(function(){
			$('#dialogue').removeClass('hidden dialogue-down');
			$('#dialogue').addClass('dialogue-up');
		}, 1000);
	}

	function dialogueDown(){
			$('#dialogue').addClass('dialogue-down adam-spoken');
			$('#dialogue').removeClass('dialogue-up');
			$('#dialogue p').css({'display':'none'});
			// setTimeout(function(){
			// 	$('.dialogue').detach();
			// }, 1500);
	}

	// adam ngomong di awal
	function dialogueOpening(){
		dialogueUp();
		setTimeout(function(){
			$("#tulisan-1").css({'display':'block'});
			$("#tulisan-1").typetext();
		}, 2000);

		new Swiper('.dialogue-text', {
				direction: 'vertical',
				nextButton: '.sidebar-next',
				noSwiping:	true,
				onSlideChangeStart:	function(z){
					if(z.activeIndex === 1){
						$("#tulisan-2").typetext();
					}

					if(z.activeIndex === 2){
						$("#tulisan-3").typetext();
						$('.sidebar-next').on('click', function(){
							console.log('yak!');
							dialogueDown();
						});
					}
				}
			});
	}

	dialogueOpening();

	// dialog cafe
	function dialogueCafe(){
		var achievement1	=	$('.dialogue-achievement-1').detach();
		dialogueUp();
		setTimeout(function(){
			$("#tulisan-1").css({'display':'block'});
			$("#tulisan-1").typetext();
		}, 2000);

		// clickAchievement1();

		var dialogueCafeOpening = new Swiper('.dialogue-cafe', {
				direction: 'vertical',
				nextButton: '.sidebar-next',
				noSwiping:	true,
				onSlideChangeStart:	function(c){
					if(c.activeIndex === 1){
						$("#tulisan-2").typetext();
					}

					if(c.activeIndex === 2){
						$("#tulisan-3").typetext();
					}

					if(c.activeIndex === 3){
						$("#tulisan-4").typetext();
					}

					if(c.activeIndex === 4){
						$("#tulisan-5").typetext();
					}

					if(c.activeIndex === 5){
						$("#tulisan-6").typetext();
						$('.sidebar-next').on('click', function(){
							console.log('yak!');
							dialogueDown();
						});
					}
				}
			});

		function clickAchievement1() {
			$('#achievement-1').on('click', function(){
				dialogueDown();
				dialogueUp();
				var dialogue00	=	$('.dialogue-text').detach();
				$('#dialogue').html(achievement1);
				$('.museum-1 p').css({'display':'none'});
				setTimeout(function(){
					$('.museum-1 p').css({'display':'block'});
					$("#dialogue-achievement-1").typetext({

					});
				}, 2000);
				var dialogueMuseum1 = new Swiper('.dialogue-achievement-1', {
						direction: 'vertical',
						nextButton: '.sidebar-next',
						noSwiping:	true,
						onSlideChangeStart:	function(z){
							if(z.activeIndex === 1){
								$("#dialogue-achievement-2").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 2){
								$("#dialogue-achievement-3").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 3){
								$("#dialogue-achievement-4").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 4){
								$("#dialogue-achievement-5").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
								$('.sidebar-next').on('click', function(){
									console.log('yak!');
									dialogueDown();
									dialogueMuseum1.slideTo(0);
								});
							}
						}
					});
				});
		}
	}

	if($('.container-cafe').length) {
		dialogueCafe();
	}

	// dialog museum
	function dialogueMuseum(){
		var achievement1	=	$('.dialogue-achievement-1').detach();
		dialogueUp();
		setTimeout(function(){
			$("#tulisan-1").css({'display':'block'});
			$("#tulisan-1").typetext();
		}, 2000);

		clickAchievement1();

		var dialogueMuseumOpening = new Swiper('.dialogue-museum', {
				direction: 'vertical',
				nextButton: '.sidebar-next',
				noSwiping:	true,
				onSlideChangeStart:	function(z){
					if(z.activeIndex === 1){
						$("#tulisan-2").typetext({
							newline:	true
						});
						$('.sidebar-next').on('click', function(){
							console.log('yak!');
							dialogueDown();
							clickAchievement1();
						});
					}
				}
			});

		function clickAchievement1() {
			$('#achievement-1').on('click', function(){
				dialogueDown();
				dialogueUp();
				var dialogue00	=	$('.dialogue-text').detach();
				$('#dialogue').html(achievement1);
				$('.museum-1 p').css({'display':'none'});
				setTimeout(function(){
					$('.museum-1 p').css({'display':'block'});
					$("#dialogue-achievement-1").typetext({

					});
				}, 2000);
				var dialogueMuseum1 = new Swiper('.dialogue-achievement-1', {
						direction: 'vertical',
						nextButton: '.sidebar-next',
						noSwiping:	true,
						onSlideChangeStart:	function(z){
							if(z.activeIndex === 1){
								$("#dialogue-achievement-2").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 2){
								$("#dialogue-achievement-3").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 3){
								$("#dialogue-achievement-4").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
							}

							if(z.activeIndex === 4){
								$("#dialogue-achievement-5").typetext();
								$('#achievement-1').on('click', function(){
									dialogueMuseum1.slideTo(0);
								});
								$('.sidebar-next').on('click', function(){
									console.log('yak!');
									dialogueDown();
									dialogueMuseum1.slideTo(0);
								});
							}
						}
					});
				});
		}
	}

	if($('.container-museum').length) {
		dialogueMuseum();
	}

	// var museum	=	$('#background-museum-interior svg').detach();
	//
	// $('#museum').on('click', function(){
	// 	$('#background-city').hide();
	// 	$('#background-museum-interior').html(museum);
	// });

	var resize;
	function responsive(){
		clearTimeout(resize);
		resize = setTimeout(mobile, 0);
	}


	// dialog pembuka hanya dijalankan pada load pertama kali saja
	// $(window).one('ready', function(){
	// 	dialogueOpening();
	// });

	$(window).on('load resize', responsive);
});
