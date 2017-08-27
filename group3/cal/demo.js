// Call this from the developer console and you can control both instances
var calendars = {};


//$(document).ready( function() {
function startCal(json) {
		
    console.info(
        'Welcome to the CLNDR demo. Click around on the calendars and' +
        'the console will log different events that fire.');


	
    // Assuming you've got the appropriate language files,
    // clndr will respect whatever moment's language is set to.
    // moment.locale('ru');

    // Here's some magic to make sure the dates are happening this month.
    var thisMonth = moment().format('YYYY-MM');
    var testEvent = moment().format('08/24/2017');
    // Events to load into calendar
    var eventArray = [
        // {

        // title: 'test',
        // date: testEvent
        // //startDate: thisMonth + '-10'
        // },{
	
        //     title: 'Multi-Day Event',
        //     endDate: thisMonth + '-14',
        //     startDate: thisMonth + '-10'
        // }, {
        //     endDate: thisMonth + '-23',
        //     startDate: thisMonth + '-21',
        //     title: 'Another Multi-Day Event'
        // }, {
        //     date: thisMonth + '-27',
        //     title: 'Single Day Event'
        // }
    ];
    
    for (var idx=0; "startDate" in json[idx]; idx++) {
      var newEvent = {date: json[idx].startDate}
      eventArray.push(newEvent)
    }
    
    //document.getElementById('info-pages').src = "info-pages/2017-04-22.html";
    
    // The order of the click handlers is predictable. Direct click action
    // callbacks come first: click, nextMonth, previousMonth, nextYear,
    // previousYear, nextInterval, previousInterval, or today. Then
    // onMonthChange (if the month changed), inIntervalChange if the interval
    // has changed, and finally onYearChange (if the year changed).
    calendars.clndr1 = $('.cal1').clndr({
        events: eventArray,
        clickEvents: {
            click: function (target) {
                console.log('Cal-1 clicked: ', target);
                if (target.events.length > 0) {
                  initEvent("NewEvent " + target.date._i);
                  $('#calDl').show();
                  document.getElementById('info-pages').src = "info-pages/" + target.date._i + ".html";
                } else {
                  $('#calDl').hide();
                  document.getElementById('info-pages').src = "info-pages/NoEvent.html";
                }
                
              $("#modal-info").modal({
                fadeDuration: 200
              });
            },
            today: function () {
                console.log('Cal-1 today');
            },
            nextMonth: function () {
                console.log('Cal-1 next month');
            },
            previousMonth: function () {
                console.log('Cal-1 previous month');
            },
            onMonthChange: function () {
                console.log('Cal-1 month changed');
            },
            nextYear: function () {
                console.log('Cal-1 next year');
            },
            previousYear: function () {
                console.log('Cal-1 previous year');
            },
            onYearChange: function () {
                console.log('Cal-1 year changed');
            },
            nextInterval: function () {
                console.log('Cal-1 next interval');
            },
            previousInterval: function () {
                console.log('Cal-1 previous interval');
            },
            onIntervalChange: function () {
                console.log('Cal-1 interval changed');
            }
        },
        multiDayEvents: {
            singleDay: 'date',
            endDate: 'endDate',
            startDate: 'startDate'
        },
        showAdjacentMonths: true,
        adjacentDaysChangeMonth: false
    });

      function initEvent(eName) {
  	    cal.addEvent(eName, 'This is event info', 'Location', '1/1/1970', '1/1/1970');
      }

    // Bind all clndrs to the left and right arrow keys
    $(document).keydown( function(e) {
        // Left arrow
        if (e.keyCode == 37) {
            calendars.clndr1.back();
            calendars.clndr2.back();
            calendars.clndr3.back();
        }

        // Right arrow
        if (e.keyCode == 39) {
            calendars.clndr1.forward();
            calendars.clndr2.forward();
            calendars.clndr3.forward();
        }
    });


//
//  Dialog stuff below MW
//



    // $('.simple-ajax-popup').magnificPopup({
    //       type: 'ajax'
    // });

    // var $modalDialog = $('<div/>', { 
    //       'class': 'exampleModal', 
    //       'id': 'exampleModal1' 
    //     })
    //     .appendTo('body')
    //     .dialog({
    //         resizable: false,
    //         autoOpen: false,
    //         height: 300,
    //         width: 350,
    //         show: 'fold',
    //         buttons: {
    //             "Close": function () {
    //                 $modalDialog.dialog("close");
    //             }
    //         },
    //         modal: true
    //     });

    //     $(function () {
    //         $('a.exampleLink').on('click', function (e) {
    //             e.preventDefault();
    //             // TODO: Undo comments, below
    //             //var url = $('a.exampleLink:first').attr('href');
    //             //$modalDialog.load(url);
    //             $modalDialog.dialog("open");
    //         });
    //     });

    
    
    
    
};


$(document).ready( function() {
	$.ajax({
            type: 'GET',
            url: "data.json",
            async: false,
            contentType: "application/json",
            dataType: 'json',
            success: function (json) {
                //alert("here is the name: "+json[0].name);
                startCal(json);
            },
            error: function (e) {
                alert("error");
            }
        });
});