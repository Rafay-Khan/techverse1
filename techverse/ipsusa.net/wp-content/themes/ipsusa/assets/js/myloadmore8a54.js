// jQuery(function($){ // use jQuery code inside this to avoid "$ is not defined" error
// 	$('.misha_loadmore').click(function(){
 
// 		var button = $(this),
// 		    data = {
// 			'action': 'loadmore',
// 			'query': misha_loadmore_params.posts, // that's how we get params from wp_localize_script() function
// 			'page' : misha_loadmore_params.current_page
// 		};
 
// 		$.ajax({ // you can also use $.post here
// 			url : misha_loadmore_params.ajaxurl, // AJAX handler
// 			data : data,
// 			type : 'POST',
// 			beforeSend : function ( xhr ) {
// 				button.text('Loading...'); // change the button text, you can also add a preloader image
// 			},
// 			success : function( data ){
// 				if( data ) { 
// 					button.text( 'More posts' ).prev().before(data); // insert new posts
// 					misha_loadmore_params.current_page++;
 
// 					if ( misha_loadmore_params.current_page == misha_loadmore_params.max_page ) 
// 						button.remove(); // if last page, remove the button
 
// 					// you can also fire the "post-load" event here if you use a plugin that requires it
// 					// $( document.body ).trigger( 'post-load' );
// 				} else {
// 					button.remove(); // if no data, remove the button as well
// 				}
// 			}
// 		});
// 	});
// });
// jQuery(function($){
// 	var canBeLoaded = true, // this param allows to initiate the AJAX call only if necessary
// 	    bottomOffset = 2000; // the distance (in px) from the page bottom when you want to load more posts
 
// 	$(window).scroll(function(){
// 		console.log(misha_loadmore_params.posts);
// 		var data = {
// 			'action': 'loadmore',
// 			'query': misha_loadmore_params.posts,
// 			'page' : misha_loadmore_params.current_page
// 		};
// 		if( $(document).scrollTop() > ( $(document).height() - bottomOffset ) && canBeLoaded == true ){
// 			$.ajax({
// 				url : misha_loadmore_params.ajaxurl,
// 				data:data,
// 				type:'POST',
// 				beforeSend: function( xhr ){
// 					// you can also add your own preloader here
// 					// you see, the AJAX call is in process, we shouldn't run it again until complete
// 					canBeLoaded = false; 
// 				},
// 				success:function(data){
// 					if( data ) {
// 						$('#main').find('.ajaxdata_list').after( data ); // where to insert posts
// 						canBeLoaded = true; // the ajax is completed, now we can run it again
// 						misha_loadmore_params.current_page++;
// 					}
// 				}
// 			});
// 		}
// 	});
// });

jQuery('#load-more').click(function($){

        var button = jQuery(this),
            data = {
                'action': 'load_more',
                'query': load_more.posts,
                'page' : load_more.current_page,
                'nonce': load_more.nonce
            };

        jQuery.ajax({
            url : load_more.ajaxurl,
            data : data,
            type : 'POST',
            beforeSend : function ( xhr ) {
                button.text('Loading...');
            },
            success : function( data ){
                if( data ) {

                    //reset button text
                    button.text( 'Load More' );

                    //append new data
                    jQuery('.load-more-target').append(data);

                    load_more.current_page++;
                    if ( load_more.current_page == load_more.max_page )
                        button.remove();

                } else {
                    button.remove();
                }
            }
        });
    });