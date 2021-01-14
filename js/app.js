$(document).ready(function(){
    
    $('#loading').fadeOut(2000,function(){
        $('body').css('overflow','visible')
        new WOW().init();
    })
    
})
$(function () {
    'use strict';
    var winH   = $(window).height(),
        navH   = $('.navbar').innerHeight();
    $('.head .item-img ,.head .item-info').innerHeight(winH-navH);
  });

$(window).scroll(function(){
    
    if($(window).scrollTop() > 600){
        $('#Top').css('display','flex')
        $('.navbar').addClass('navMove')
    }else{
        $('.navbar').removeClass('navMove')
        $('#Top').css('display','none')
    }
})

$('#Top').click(function(){
    $('html,body').animate({scrollTop:0},2000)
})

$(".nav-link").click(function(){
    $('.nav-link').removeClass('active')
    $(this).addClass('active')
    let targetElementId=$(this).attr("href")
    let targetElementDistanceToTop=$(targetElementId).offset().top
    $('html,body').animate({ scrollTop:targetElementDistanceToTop },1000)
})

$('.gallery-link').click(function(event){
    event.preventDefault();
    let selector=$(this).attr('name')
    let element=$(selector)
    let elementContent=element.html()
    console.log(elementContent)
    $('#Gallery .item-left .img-container').html(elementContent)

})