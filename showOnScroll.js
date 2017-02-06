<script type="text/javascript">

(function($) {          
    $(document).ready(function(){                    
        $(window).scroll(function(){                          
            if ($(this).scrollTop() > 200) {
                $('#navbar').fadeIn(500);
            } else {
                $('#navbar').fadeOut(500);
            }
        });
    });
})(jQuery);
</script>