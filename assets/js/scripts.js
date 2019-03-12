(function($){
    $(document).ready(function(){
        $('.post-content').find('img').each(function(){
            var src = $(this).attr('src');
            var title = $(this).attr('alt');
            $(this).wrap('<a data-fancybox="gallery" class="post-content-image shadow" href="' + src + '" data-caption="' + title + '" title="' + title + '"></a>');
            
            var box = $(this).parent('.post-content-image');
            box.wrap('<figure></figure>')
            box.parent('figure').append('<figcaption>' + title + '</figcaption>');

            if($(this).width() > $('.post-content').width()){
                $(this).css('width','95%');
            }
        });

    });
})(jQuery);


window.onscroll = function () {
    var rect = document.getElementById('comments').getBoundingClientRect();
    if (rect.top < window.innerHeight) {
        var js = document.createElement('script');
        js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=822714894740746&version=v3.2&autoLogAppEvents=1';
        document.body.appendChild(js);
        window.onscroll = null;
    } 
}