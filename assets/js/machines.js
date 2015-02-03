$(document).ready(function(){

  initSliders();

  var FJS = FilterJS(movies, '#movies', {
    template: '#movie-template',
    search: {ele: '#searchbox'},
    //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
    callbacks: {
      afterFilter: function(result){
        $('#total_movies').text(result.length);
      }
    }
  });

  FJS.addCallback('beforeAddRecords', function(){
    if(this.recordsCount >= 450){
      this.stopStreaming();
    }
  });

  FJS.addCallback('afterAddRecords', function(){
    var percent = (this.recordsCount - 250)*100/250;

    $('#stream_progress').text(percent + '%').attr('style', 'width: '+ percent +'%;');

    if (percent == 100){
      $('#stream_progress').parent().fadeOut(1000);
    }
  });

  FJS.setStreaming({
    data_url: 'assets/js/stream_movies.json',
    stream_after: 1,
    batch_size: 50
  });

  FJS.addCriteria({field: 'cutting', ele: '#cutting_filter input:checkbox'});
  FJS.addCriteria({field: 'work', ele: '#genre_criteria input:checkbox'});
  FJS.addCriteria({field: 'head', ele: '#head_filter input:checkbox'});
  /*
  FJS.addCriteria({field: 'rating', ele: '#rating_filter', type: 'range'});
  FJS.addCriteria({field: 'runtime', ele: '#runtime_filter', type: 'range'});*/
 

  /*
   * Add multiple criterial.
    FJS.addCriteria([
      {field: 'genre', ele: '#genre_criteria input:checkbox'},
      {field: 'year', ele: '#year_filter', type: 'range'}
    ])
  */

  window.FJS = FJS;
});

function initSliders(){
  $("#rating_slider").slider({
    min: 0.1,
    max: 3,
    values:[0.1, 3],
    step: 0.1,
    range:true,
    slide: function( event, ui ) {
      $("#rating_range_label" ).html(ui.values[ 0 ] + ' - ' + ui.values[ 1 ]);
      $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $("#runtime_slider").slider({
    min: 50,
    max: 250,
    values:[0, 250],
    step: 10,
    range:true,
    slide: function( event, ui ) {
      $("#runtime_range_label" ).html(ui.values[ 0 ] + ' mins. - ' + ui.values[ 1 ] + ' mins.');
      $('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    }
  });

  $('#genre_criteria :checkbox').prop('checked', true);
  $('#all_genre').on('click', function(){
    $('#genre_criteria :checkbox').prop('checked', $(this).is(':checked'));
  });
$('#cutting_filter :checkbox').prop('checked', false);
//$('#all_cutting').prop('disabled', true);
  $('#all_cutting').on('click', function(){
    $('#cutting_filter :checkbox').prop('checked', $(this).is(':checked'));
  });
    
// var checked = [],
//  $check = $('.check').change(function() {
//    if (this.value == "all" && this.checked) {
//       $('#all_cutting').prop('disabled', true);
//     checked = [];
//    }
//    else { 
//        $('#all_cutting').prop('disabled', false);
//        checked.push(this);
//        checked = $(checked)
//        $('#cutting_filter :checkbox').prop('checked', false).slice(-1).prop('checked', true);
//        $check.not(this).prop('checked', false);
//
//    }
//});
  
$('#head_filter :checkbox').prop('checked', true);
//$('#all_head').prop('disabled', true);
  $('#all_head').on('click', function(){
    $('#head_filter :checkbox').prop('checked', $(this).is(':checked'));
  });



}

