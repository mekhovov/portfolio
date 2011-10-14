
var colWidth = 640
var colMargin = 1
var itemMargin = 0
var transitionX = 500
var transitionY = 600
var focusCol = 0
var thatCol = null
var thatRow = null
var focusRow = 0
var adjOpacityX = 0.25
var adjOpacityY = 0.25
var disab = false;
var thistransition = 600
var colShiftY = 0
var zeroTransition = 350

var downOff = false;
var upOff = true;
var leftOff = true;
var rightOff = false;


var newHeight = 0;
var yShift = -80;
var colCount =0;
var colHeight = 0;
var left = 0
var fullWidth = 670
var focusOffset = 200
var itemMargin = 30


var lineOpacity = 0.4
var lineThickness = 5
var aboutOn = false
var aboutFlag = false
var notworkOn = false
var notworkFlag = false
var controlOpacityNear = 0.3
var controlOpacityHover = 0.6
var controlOpacityActive = 0.6
var hindex = false;
var hideThm = true;
var override = false;
var trackerX = 7

var photosLoaded = false


function showThumb(hindex) {
	if (hindex){
		var newX = 0
		var newY = 0
		var thumbprev = $('#thumbprev')
		var targetimg = $('#gallery .inner div.col:eq('+hindex+') div:first img')
		var targetsrc = $(targetimg).attr('src')
		var targetsrcY = $(targetimg).attr('height')
		var targetsrcX = $(targetimg).attr('width')
		var thistitle = $(targetimg).parent().parent().parent().children('div.header').children('div.contents').children('input').val()
	
		targetsrcX = parseInt(targetsrcX)
		targetsrcY = parseInt(targetsrcY)
		var newX = Math.ceil(targetsrcX / 5)
		var newY = Math.ceil(targetsrcY / 5)	
		$(thumbprev).children('p').html(thistitle)
		$(thumbprev).children('div').html('')	
		$(thumbprev).children('div').append('<img src="'+targetsrc+'" width="'+newX+'px" height="'+newY+'px"/>')
		$(thumbprev).fadeIn(200)
	}
}

function hideThumb() {
	if (hideThm) {	
		$('#thumbprev').fadeOut(100)
	}
	
}





		$(document).ready( function() {
			
			
			
		$('.mover').css('opacity', controlOpacityNear)
		

			$('.mover').hover( function() {
			$(this).animate({ 
				opacity: controlOpacityHover}, 100)	

			}, function (){
				$(this).animate({ 
					opacity: controlOpacityNear},100)
			})



			$('#left').hover( function() {
			controlhoverL = true;	
			}, function() {
			controlhoverL = false;	
			})

			$('#right').hover( function() {
			controlhoverR = true;	
			}, function() {
			controlhoverR = false;	
			})

				$('#down').hover( function() {
				controlhoverD = true;	
				}, function() {
				controlhoverD = false;	
				})

					$('#up').hover( function() {
					controlhoverU = true;	
					}, function() {
					controlhoverU = false;	
					})

				var controlhoverL = false
				var controlhoverR = false
				var controlhoverD = false
				var controlhoverU = false
			
			
			
			
					function fadeControls() {
								if (!controlhoverL) {
								$('#left').animate({ 
										opacity: '0'}, 300)
								}

								if (!controlhoverR) {
								$('#right').animate({ 
										opacity: '0'}, 300)
								}

								if (!controlhoverD) {
								$('#down').animate({ 
										opacity: '0'}, 300)
								}

								if (!controlhoverU) {
								$('#up').animate({ 
										opacity: '0'}, 300)
								}
					}
		
			
			
			
			var animY =800
			
		
			
	
			
			
		})

$(window).resize( function() {
	arrange()
})


function assignIdentifers() {
	
	// Assigns IDs to all the columns and rows. Must be run when document ready and prior to arrangement.
	 var counter = 0
	$('#gallery .inner .col').each(function() {
	$(this).attr('id', 'c'+counter)

	counter2 = 0
		$(this).children('.item').each(function() {
			$(this).attr('id', 'c'+counter+'r'+counter2)
			counter2++
		})
	counter++
	})	
	
}


function arrange() {
//
//	alert(colCount)
	left=0
	colCount = 0;
	var winWidth = $(window).width();
	var glowWidth = $('#glowbg').width();
	var winHeight = $(window).height();
	

	
if (winHeight < 1100) {
	
	yShift = (((winHeight - 900)/2) - 110)
	if (yShift < -190) {
		yShift = -190;
	}
	
	yShift2 = ((winHeight -550)/2)
	
	if (yShift2 < 150) {
		yShift2 = 150
	}
	
	yShift3 = ((winHeight -550)/2)
	
	if (yShift3 < 50) {
		yShift3 = 50
	}
	
	
	$('#main').css('margin-top', yShift)
	
	aboutXShift = 0
	aboutXShift = (winWidth/2-500)
	
	photoXShift = 0
	photoXShift = (winWidth/2-500)
	
	if (aboutXShift < 30) {
		aboutXShift = 30
	}

	
	$('#aboutPanel .inner').css('margin-top', yShift2)
	$('#aboutPanel .inner').css('left', aboutXShift )
	
	$('#photoPanel .inner').css('margin-top', yShift3)
	$('#photoPanel .inner').css('left', photoXShift )
	


}

	if (winHeight > 760) {
		newHeight = (winHeight - yShift)
		newHeight -=60
		$('#main').css('height', newHeight)	
	}

		$('#aboutPanel').css('height',winHeight)
		$('#page').css('height', winHeight)
	$('#imgLg').css('height',winHeight-60)

		// Arrange columns
		left=0;

		$('#main .col').each(function() {
	
		colCount= (colCount+1)
		colCount = parseInt(colCount)
	
		
		
		$(this).css('left', left+'px')
		left = (left + fullWidth)	
		thistop = focusOffset
		//alert(left)
		
		if ($(this).attr('id') == 'c'+focusCol) {
			thistop = focusOffset - colShiftY
		}
		
		prevheight = 0
		
		$(this).children('.item').each(function() {
			
			thistop =  (thistop+prevheight)
			
			prevheight = $(this).css('height')
			//alert(thistop+' prev: '+prevheight)	
			prevheight = prevheight.substr(0, prevheight.length-2)
			prevheight = parseInt(prevheight)		
			prevheight += itemMargin
			$(this).css('top',thistop)
			})
					
		})
		
		
		
			focusCoords = $('#c'+focusCol+'r'+focusRow).offset()

			focusX =focusCoords.left;
			focusY =focusCoords.top;


		//	alert(focusY)

			itemX = $('#c'+focusCol+'r'+focusRow).width()
			itemY = $('#c'+focusCol+'r'+focusRow).height()

			// Using the position of the focussed item, set the position the movement icons
			$('#left').css('left',  (focusX -50));
			$('#left').css('top', (focusY+(itemY/2) -25));
			
			$('#right').css('left',  (focusX + itemX +5));
			$('#right').css('top', (focusY+(itemY/2) -20));

			$('#down').css('left', (focusX +(itemX/2) -20 ));
			$('#down').css('top', (focusY+ (itemY)));

			$('#up').css('left',  (focusX +(itemX/2)-20 ));
			$('#up').css('top', (focusY-43));
			
			
			if (focusRow == 0) {
				upOff = true;
				$('#up').css('display','none')
			}
			
			
				if (focusCol == 0) {
					leftOff = true;
					$('#left').css('display','none')
				}
			
			
}
assignIdentifers()
arrange();
prepare();
buildGrid();

	$('#horizon').css('opacity',1)

//$('#horizon').css('display','block')

$('#c'+focusCol+'r'+focusRow).addClass('dropShadow')
	
	
	
	function buildGrid() {
		var lines = new Array()
		var k=0
		var maxheight=0
		
		$('#gallery .inner .col').each(function() { 
			var colheight=0
			$(this).children('.item').each(function() {
			 colheight = (colheight + $(this).height())
			})
		
		thisheight = colheight
		if (thisheight > maxheight) {
			maxheight = thisheight
		}
		lines[k] = thisheight
		k++
		})

	gridheight = $('#grid').height()
	if (!gridheight) {
		gridheight = 55
	}
	var multiplier = (gridheight / maxheight)
	for (i=0;i<lines.length;i++) {
		thisheight = (lines[i] * multiplier)
		$('#grid').append( '<div class="line" style="height: '+thisheight+'px" id="l'+i+'">&nbsp;</div>' )
	
	}	
	
	$('#grid').append( '<div id="tracker">&nbsp;</div>' )

	trackerheight = 0
	elementheight = $('#c'+focusCol+'r'+focusRow+'').height()		
	trackerheight = (elementheight * multiplier)
	trackerheight = Math.round(trackerheight)
	
	
	$('#tracker').css( 'height', trackerheight+'px')
			
		$('#grid .line').hover( function() {
			
			
			hideThm = false
		//	$(this).css('cursor','pointer')
			 $(this).animate({ opacity: 1 }, 100)
			hindex=$(this).index()
			ti = setTimeout("showThumb('"+hindex+"')",800)
			if (ti2) {
					clearTimeout(ti2)
			}	
			
			

		}, function() {
 				$(this).animate({  opacity: lineOpacity  }, 100)
				clearTimeout(ti)
				hindex = false;
				hideThm = true;
				ti2 = setTimeout("hideThumb()",1000)
				
		})
		
		
		$('#grid .line').click( function() {
				return false
				var index  = $(this).index()
				var direction = 1
			
				if (focusCol > index) {
					direction = 0
				}
				
				if (focusCol == index) {
					return false
				}
				
				cols = Math.abs(index-focusCol)
				moveX(direction, cols)

				return false


		})
		
	}
	
	
	function moveX(dir, cols) {
			
				if (!disab) {
				disab = true

				if (dir ==1) {
					// Move right
					sign = '-'
					thatCol = focusCol
					
					focusCol = (focusCol + cols)
					thatRow = focusRow
					focusRow = 0
				} else {
					sign = '+'
					thatCol = focusCol
					focusCol = (focusCol - cols)
					thatRow = focusRow
					focusRow = 0
				}
			
				
				// Check if movement is out of bounds
				if ( (focusCol == -1)  || (focusCol >= colCount)  ) {
					if (dir == 1) {
						focusCol =  (focusCol-cols)
						focusRow = thatRow
					} else {
						focusCol = (focusCol + cols)
						focusRow = thatRow

					}
					
				
					
					disab=false
					return false;
				}
				
			
				
				
					if (focusCol == 0) {
						leftOff = true;
						$('#left').fadeOut(300)
						//$('.kleft').addClass('kleftinactive')
					} else {
						leftOff = false
						$('#left').fadeIn(300)		
						//$('.kleft').removeClass('kleftinactive')
					}

						$('#down').fadeIn(300)
						upOff = true
						$('#up').fadeOut(300)


					if (focusCol == (colCount-1)) {
						//$('.kright').addClass('krightinactive')
						rightOff = true;
						$('#right').fadeOut(300)
					} else {
						//$('.kright').removeClass('krightinactive')
						$('#right').fadeIn(300)		

					}
				
				
					$('.item').removeClass('dropShadow')
				
				
				
				
				if (cols ==1) {
				
					$('#main .inner').animate( {

						left: sign+'='+(fullWidth*cols)


					}, thistransition, function() {
						// Animation complete
						
						
							$('#c'+focusCol+'r'+focusRow).addClass('dropShadow')
	
						
						disab=false

					})
					
						$('#ht'+thatCol).fadeOut((thistransition/2), 
						function() {
							$('#ht'+focusCol).fadeIn((thistransition/2))
						})
						
						$('#st'+thatCol).fadeOut((thistransition/2), 
						function() {
							$('#st'+focusCol).fadeIn((thistransition/2))
						})
							
						$('#bt'+thatCol).fadeOut((thistransition/2), 
						function() {
							$('#bt'+focusCol).fadeIn((thistransition/2))
						})
						
						
						$('#bl'+thatCol).fadeOut((thistransition/2), 
						function() {
							$('#bl'+focusCol).fadeIn((thistransition/2))
						})

						$('#bll'+thatCol).fadeOut((thistransition/2), 
						function() {
							$('#bll'+focusCol).fadeIn((thistransition/2))
						})

				
					$('#c'+focusCol).children('div.item').each( function() {

						if ($(this).attr('id') == 'c'+focusCol+'r'+focusRow) {
							$(this).children('div').animate({
							opacity: 1
							}	, thistransition, function() {
								// Animation complete
								disab=false
							}) 
							
							$(this).animate({
							opacity: 1
							}	, thistransition, function() {
								// Animation complete
								disab=false
							})
							
						} else {

							$(this).children('div').animate({
							opacity: adjOpacityY
							}, thistransition, function() {
								// Animation complete
								disab=false
							})
							
								$(this).animate({
								opacity: 1
								}	, thistransition, function() {
									// Animation complete
									disab=false
								})

						}
					})
					
							thatHeight = 0
							rowCount = $('#c'+thatCol).children('.item').size()
							var header = false
								for(x=0;x<rowCount;x++) {
									
									
										if (thatCol < focusCol) {
											
										$('#c'+thatCol+'r'+x).animate( { 
										top: '+='+colShiftY,
										opacity: 0
										}, transitionY, function() {
											colShiftY = 0
										})
										} else {
										
											$('#c'+thatCol+'r'+x).animate( { 
											top: '+='+colShiftY
											}, transitionY, function() {
												colShiftY = 0
											})
											
												$('#c'+thatCol+'r'+x).children('div').animate({
												opacity: adjOpacityY
												}, thistransition)
											
										}

								thatHeight = $('#c'+thatCol).children('.item div').height()
								thatHeight = (thatHeight+ itemMargin)


							}
						
						
						}
						 else {
						// More than one column shift
							
						$('.mover').fadeOut(  (thistransition/2), function() {
							
								$('.mover').fadeIn(  (thistransition/2))
						}  )
						
						
							$('#ht'+thatCol).fadeOut((thistransition/2), 
							function() {
								$('#ht'+focusCol).fadeIn((thistransition/2))
							})

							$('#st'+thatCol).fadeOut((thistransition/2), 
							function() {
								$('#st'+focusCol).fadeIn((thistransition/2))
							})

							$('#bt'+thatCol).fadeOut((thistransition/2), 
							function() {
								$('#bt'+focusCol).fadeIn((thistransition/2))
							})
							
								$('#bl'+thatCol).fadeOut((thistransition/2), 
								function() {
									$('#bl'+focusCol).fadeIn((thistransition/2))
								})
								$('#bll'+thatCol).fadeOut((thistransition/2), 
								function() {
									$('#bll'+focusCol).fadeIn((thistransition/2))
								})
							
							
						$('#gallery').fadeOut((thistransition/2), function() {
						
						newLeft = 	$('#main .inner').offset().left
						if (dir == 1) {
							newLeft += (fullWidth*cols)
						} else {
							newLeft -=  (fullWidth*cols)
						}
						
						
						$('#main .inner').css('left', '-'+newLeft+'px' )
						
						resetOpacity()
						
						$('#gallery').fadeIn((thistransition/2))
						
					
							$('#c'+focusCol+'r'+focusRow).addClass('dropShadow')
							
								$('#c'+focusCol).children('div.item').each( function() {

									if ($(this).attr('id') == 'c'+focusCol+'r'+focusRow) {
										$(this).children('img').animate({
										opacity: 1
										}	, thistransition, function() {
											// Animation complete
											disab=false
										}) 

										$(this).animate({
										opacity: 1
										}	, thistransition, function() {
											// Animation complete
											disab=false
										})

									} else {

										$(this).children('img').animate({
										opacity: adjOpacityY
										}, thistransition, function() {
											// Animation complete
											disab=false
										})

											$(this).animate({
											opacity: 1
											}	, thistransition, function() {
												// Animation complete
												disab=false
												arrange()
											})

									}
								})
							
							
						})
							
							
						//	return false
							
							
							
						}
						
						
						
				
						
							var invsign = ''
							if (sign == '+') {
								invsign = '-'
							} else {
								invsign = '+'
							}
						
						var trackerShift = (trackerX * cols)
						$('#tracker').animate({ 'opacity': 0}, 200, 

						function() {   $('#tracker').animate({ 'left': invsign+'='+trackerShift, 'top': 0, 'height': trackerheight+'px'}, 100, 
						function() {   $('#tracker').animate({ 'opacity': 1}, 200)  }			

						) }  
						)
						
				
				
				}
	
}

function resetOpacity() {
	
	k=0

	
	$('.col').each( function() {		
		if (k < (focusCol)) {
			$('#c'+k).children('.item').css('opacity', 0)	
		}
	k++
		
	})
	
}


function moveY(dir) {
	
	
	if (!disab) {
		disab = true
	// Height is variable

	if (dir == 1) {
		// Move down
			sign = '-'
			thatRow = focusRow
			focusRow = (focusRow + 1)
			
	} else{ 
		// Move up
			sign = '+'
			thatRow = focusRow
			focusRow = (focusRow - 1)
		
		}
	rowCount = $('#c'+focusCol).children('.item').size() 

		// Check if movement is out of bounds
		if ( (focusRow == -1)  || ((focusRow) == rowCount)  ) {
		
			// Reset focussed column
			if (dir == 1) {
				focusRow =  (focusRow-1)
			
			} else {
				focusRow =  (focusRow+1)

			}
			disab=false
			return false;
		}
		
		
			if (focusRow == (rowCount -1)) {
				downOff = true;
				$('#down').fadeOut(300)	
				//$('.kdown').addClass('kdowninactive')
			} else {
				if (downOff) {
					downOff = false;
				$('#down').fadeIn(300)	
					//$('.kdown').removeClass('kdowninactive')	
				}
			}
			
			if (focusRow ==0) {
				upOff = true
				//$('.kup').addClass('kupinactive')
				$('#up').fadeOut(300)		
			} else {
				if (upOff) {
					upOff = false
				//	$('.kup').removeClass('kupinactive')
				$('#up').fadeIn(300)
				}
			}
		
		
		
		
			$('.item').removeClass('dropShadow')
		
		
		if (focusRow == (rowCount -1)) {
			downOff = true;
			$('#down').fadeOut(300)	
			//$('.kdown').addClass('kdowninactive')
		} else {
			if (downOff) {
				downOff = false;
			$('#down').fadeIn(300)	
				//$('.kdown').removeClass('kdowninactive')	
			}
		}
		
		if (focusRow ==0) {
			upOff = true
			//$('.kup').addClass('kupinactive')
			$('#up').fadeOut(300)		
		} else {
			if (upOff) {
				upOff = false
			//	$('.kup').removeClass('kupinactive')
				$('#up').css('display','block')		
				$('#up').css('opacity',0)		
			}
		}
		
		// Determine how far to move by the focussed row's next element's height. Get this value via the index selector.
		if (sign == '-') {
		shiftY = $('#c'+focusCol+'r'+thatRow+' div').height()
		} else {
		shiftY = $('#c'+focusCol+'r'+focusRow+' div').height()		
		}
		
		shiftY = (shiftY + itemMargin)
		if (sign == '-') {
		colShiftY = (colShiftY + shiftY)
		} else {
			colShiftY =  (colShiftY - shiftY)
		}
		
		// Get the column height and the line column height to determine the tracker movement
		thiscolheight = 0
		$('#c'+focusCol).children('.item').each( function() {
			thiscolheight = (thiscolheight + $(this).children('div').height() )
		})
		activelineheight = $('#l'+focusCol).height()
		
		multiplier = (activelineheight / thiscolheight)
		trackermoveY = (multiplier * shiftY)
		trackermoveY = Math.round(trackermoveY)
		trackermoveY = trackermoveY
		trackerheight = 0
		nextelementheight = $('#c'+focusCol+'r'+focusRow+' div').height()		
		trackerheight = (nextelementheight * multiplier)
		trackerheight = Math.round(trackerheight)
		
			if (sign == '-') {

				$('#tracker').animate( {
			top: '+='+trackermoveY+'px',
				height: trackerheight+'px'
			}, transitionY)
		} else {
				$('#tracker').animate( {
				top: '-='+trackermoveY+'px',
				height: trackerheight+'px'
								}, transitionY)
		}
	
		// Move everything up or down by the Shift Y value
		
		for(x=0;x<rowCount;x++) {
		
		
		if (x == focusRow) {
				$('#c'+focusCol+'r'+x).animate( { 
				top: sign+'='+shiftY+'px'
				}, transitionY)
			
				$('#c'+focusCol+'r'+x).children('div').animate( { 
				opacity: 1
				}, transitionY, function() {
					disab=false
						$('#c'+focusCol+'r'+focusRow).addClass('dropShadow')
				})
		} else if (x == thatRow) {
			
				$('#c'+focusCol+'r'+x).animate( { 
				top: sign+'='+shiftY+'px'
				}, transitionY)
			
				$('#c'+focusCol+'r'+x).children('div').animate( { 
				opacity: adjOpacityY
				}, transitionY, function() {
					disab=false
				})
				
		} else {
				$('#c'+focusCol+'r'+x).animate( { 
				top: sign+'='+shiftY+'px'
				}, transitionY)
			
			
			
		}
						
		}
	
	}
}



function prepare() {
	
	// Set opacity for all elements
	k=0;
	themecol = 338966;
	$('#gallery .inner .col').each(function() {

			$(this).children('input.headerText').each( function() {
		
				$('#projectInfo').append('<h1 style="display: none" id="ht'+k+'">'+$(this).val()+'</h1>')
			
			})
			
		
		
			$(this).children('input.subText').each( function() {

				themecol = $(this).next('input.theme').val()
				
			$('#projectInfo').append('<p class="sub" style="color: #'+themecol+'; display: none" id="st'+k+'">'+$(this).val()+'</p>')

			})
			
			
			
			$(this).children('input.bodyText').each( function() {

			$('#projectInfo').append('<p class="body" style="display: none" id="bt'+k+'">'+$(this).val()+'</p>')

			})
			
			$(this).children('input.link').each( function() {
				
				if ($(this).val()) {
				
					$('#projectInfo').append('<p class="body" style="display: none; padding-top: 0" id="bl'+k+'"><a href="'+$(this).val()+'" target="_blank">View site</a></p>')
				} else {
						$('#projectInfo').append('<p class="body" style="display: none; padding-top: 0" id="bl'+k+'"></p>')
					
				}
			})

			$(this).children('input.link_src').each( function() {
				
				if ($(this).val()) {
				
					$('#projectInfo').append('<p class="body" style="display: none; padding-top: 0" id="bll'+k+'"><a href="'+$(this).val()+'" target="_blank">See code</a></p>')
				} else {
						$('#projectInfo').append('<p class="body" style="display: none; padding-top: 0" id="bll'+k+'"></p>')
					
				}
			})

		$(this).children('.item').each(function() {
				
			if ($(this).attr('id') == 'c'+focusCol+'r'+focusRow) {
					$(this).children('div').css('opacity', 1)	
			} else if (  $(this).attr('id').substr(0,2) == 'c'+focusCol) {
			
				
				$(this).children('div').css('opacity', adjOpacityY)	
			} else {
					
			$(this).children('div').css('opacity', adjOpacityX)
			}

		
		})
		
			k++;
	})
	
	
	$('#ht'+focusCol).css('display','block')
	$('#st'+focusCol).css('display','block')
	$('#bt'+focusCol).css('display','block')
	$('#bl'+focusCol).css('display','block')
	$('#bll'+focusCol).css('display','block')
	
	
	
}


/* Social media */

var zoneHover = false
var btnsHover = false
var fader = false
var fadeInBtnDur = 450

$('#likeZone').hover( function() {
	likeBtnsActive = true
	btnsHover = true
	$('#like').fadeOut(fadeInBtnDur)
	$('#likeButtons').fadeIn(fadeInBtnDur)
	clearTimeout(fader)
		
}, function() {
	
	if (!btnsHover) {
	$('#like').fadeIn(fadeInBtnDur)
	$('#likeButtons').fadeOut(fadeInBtnDur)
	}
})

$('#likeButtons').hover( function() {
	btnsHover = true
	clearTimeout(fader)
}, function() {
	fader =	setTimeout('fadeBtns()',2000)
})

function fadeBtns() {		
	if (!zoneHover) {
	$('#like').fadeIn(fadeInBtnDur)
	$('#likeButtons').fadeOut(fadeInBtnDur)
	}	
}




		$(document).bind('keydown', 'down',function() {  $('#keys a.kdown').addClass('hoverd') });
		$(document).bind('keydown', 'up',function() {  $('#keys a.kup').addClass('hoveru') });
		$(document).bind('keydown', 'left',function() {  $('#keys a.kleft').addClass('hoverl') });
		$(document).bind('keydown', 'right',function() {  $('#keys a.kright').addClass('hoverr') });
	
		$(document).bind('keyup', 'down',function() {  moveY(1); $('#keys a.kdown').removeClass('hoverd') });
		$(document).bind('keyup', 'up',function() {  moveY(0);$('#keys a.kup').removeClass('hoveru') });
		$(document).bind('keyup', 'left',function() {moveX(0,1); $('#keys a.kleft').removeClass('hoverl')  });
		$(document).bind('keyup', 'right',function() { moveX(1,1); $('#keys a.kright').removeClass('hoverr') });

	$('#grid .line').css('opacity',lineOpacity)


$('#nav a').click( function() {
	
	/*if ($(this).attr('id') == 'workBtn') {
		$('#aboutBtn').removeClass('aboutActive')
		$('#aboutBtn').addClass('about')
		$('#workBtn').removeClass('work')
		$('#workBtn').addClass('workActive')
		$('#photoBtn').removeClass('photosActive')
		$('#photoBtn').addClass('photos')
		$('#horizon').css('display','block')
		$('#aboutPanel').css('display','none')
		$('#photoPanel').css('display','none')
			arrange()
		notworkOn = false;
	} else if ($(this).attr('id') == 'aboutBtn') {
			$('#workBtn').removeClass('workActive')
			$('#workBtn').addClass('work')
			$('#aboutBtn').removeClass('about')
			$('#aboutBtn').addClass('aboutActive')
				$('#photoBtn').removeClass('photosActive')
				$('#photoBtn').addClass('photos')
			$('#horizon').css('display','none')
			$('#photoPanel').css('display','none')
			$('#aboutPanel').css('display','block')
					notworkOn = false;
					arrange()
				/*	$('#header .inner').animate({ 
						width: '1050px'
						},600)*/
/*	} else {
		$('#horizon').css('display','none')
		$('#aboutPanel').css('display','none')
		$('#photoPanel').css('display','block')
		$('#aboutBtn').removeClass('aboutActive')
		$('#aboutBtn').addClass('about')
		$('#workBtn').removeClass('workActive')
		$('#workBtn').addClass('work')
		$('#photoBtn').removeClass('photos')
		$('#photoBtn').addClass('photosActive')
		if (!photosLoaded) {
			photosLoaded = true
			LoadPhotos()
		}
			notworkOn =false;
	}*/
	
})


$('.kup').click( function() {moveY(0)})
$('.kright').click( function() {moveX(1,1)})
$('.kleft').click( function() {moveX(0,1)})
$('.kdown').click( function() {moveY(1)})

$('#up').click( function() {moveY(0)})
$('#right').click( function() {moveX(1,1)})
$('#left').click( function() {moveX(0,1)})
$('#down').click( function() {moveY(1)})


var	gFailImage = 'img/icons/error.gif';
	
	function LoadImage(pSelector, pCallback){
	
	    var loader = $(pSelector);
	    //loader.html('<img src="' + gLoadSpinnerUrl + '" class="loading"/>');
	    LoadThisImage($(img), loader, pCallback);
	}

	function LoadAllImages(){
	
	    $('.loadable-image').each(function(){       
	        var loader = $(this);
	      
	        LoadThisImage(loader);
	    });
	}
	
	
	function LoadThisImage(loader, pCallback){

	    image_src = loader.attr('title');
	    img = new Image();
	    $(img).hide();

	    $(img).load(function() {
	        cb_js = loader.get(0).getAttribute('onload');             
	        onload_cb = function(){
	            eval(cb_js);
	       }      
		
			
	        loader.html(this);
	        loader.removeClass('loadable-image');
	        loader.removeAttr('title');
	        loader.removeAttr('onload');

	        $(this).show();
	        if (onload_cb){               
	            onload_cb($(this));

	        }             
	        if (pCallback){

	            cb = pCallback;

	            cb($(this));

	        }

	    })
		
	    .error(function() { $(this).attr('src', gFailImage).show(); })
	    .attr('src', image_src)
		.fadeIn(1200)
	   

	}
	

function LoadPhotos(){
	
	    $('.loadable-photo').each(function(){       
			var loader2 = $(this);
			LoadThisImage(loader2);
		});
	}
		
	LoadAllImages();



