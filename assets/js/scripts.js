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

        /**
         * Read time
         */
        var content_wrapper = $('article').find('.post-content');
        if(content_wrapper.length > 0){
            var word_count = 0;
            content_wrapper.find('p').each(function(){
                word_count+=$(this).text().split(' ').length;
            });
            if(word_count > 0){
                var time_in_mins = Math.floor(word_count / 228) + 1;
                $('article').find('.reading-time').text(' - ' + time_in_mins + ' mins read');
            }

        }
    });

    $(window).scroll(function(){
        if($('#comments').length > 0){
            if ($('#comments').scrollTop() < $(window).innerHeight()) {
                var js = document.createElement('script');
                js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&appId=822714894740746&version=v3.2&autoLogAppEvents=1';
                document.body.appendChild(js);
            }             
        }
    });
})(jQuery);