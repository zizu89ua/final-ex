$(function(){function t(){i($(this).siblings(".step-image"),a+1)}function e(){i($(this).siblings(".step-image"),a-1)}function i(t,e){t[a].className="step-image",a=(e+t.length)%t.length,t[a].className="step-image showing"}var a=($(".step-image"),0);$(".slider-button-right").click(t),$(".slider-button-left").click(e)}),$(function(){function t(){var t=Math.floor(20*Math.random()+1);return t}function e(){var e="https://pixabay.com/api/?key=5276352-5eeec9953d725415cb7dab763&q=&image_type=photo&min_width=350NaN&page="+t()+"&per_page=7";$.getJSON(e,function(t){parseInt(t.totalHits)>0&&$.each(t.hits,function(t,e){var i=$("<h4 class='grid__text'></h4>").append(e.tags);$("<div class='grid__box persent-size'></div>").appendTo(".grid-block").append("<img class='grid__item ' src="+e.webformatURL+">").append(i)})})}function i(e){$(".grid__box").detach(),e.preventDefault();var i=$(".holiday-cattegory__search-block").val(),a="https://pixabay.com/api/?key=5276352-5eeec9953d725415cb7dab763&q="+i+"&image_type=photo&min_width=350&min_height=300&page="+t()+"&per_page=7";$.getJSON(a,function(t){parseInt(t.totalHits)>0&&$.each(t.hits,function(t,e){var i=$("<h4 class='grid__text'></h4>").append(e.tags);$("<div class='grid__box persent-size'></div>").appendTo(".grid-block").append("<img class='grid__item ' src="+e.webformatURL+">").append(i)})})}e(),$(".holiday-cattegory__search-button").click(i)});