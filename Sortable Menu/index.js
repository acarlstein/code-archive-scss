$("ul li i.fa.fa-arrow-down").click(function(){
    if ($(this).attr('visibility') != 'hidden'){
       $(this).parent().insertAfter( $(this).parent().next());
    }
  });
  
  $("ul li i.fa.fa-arrow-up").click(function(){
    if ($(this).attr('visibility') != 'hidden'){
      $(this).parent().insertBefore( $(this).parent().prev());
    }
  });
  
  $( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );