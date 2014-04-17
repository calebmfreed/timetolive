$( document ).ready(function() {
  $( "#info" ).submit(function(event) {
    event.preventDefault();
    buildVis();
  });
});

function buildVis() {
  var age = getAge();
  // TODO: Get max age based on location. Ignoring `loc` for now.
  var loc = getLocation();

  // TODO: Remove hard coded 80 and base off of country.
  var perceivedAge = calcPerceivedAge(age, 80);

  // TODO:
  // Use perceived age to build visualization. Since we don't have a server,
  // just use jQuery to load up a new UI dynamically based on the age.
  // You can keep HTML in index.html but just keep it hidden and upon this function being called,
  // replace the entire body with that new HTML which will contain the visualization.
}

/**
 * Calculates perceived age given current age and max expected age for country
 * @param  {int} age       current age
 * @param  {int} maxAge    maximum expected age for your country
 * @return {int}           perceived age as an integer
 */
function calcPerceivedAge(age, maxAge) {
  var percievedAge = ( (maxAge * (Math.log(age-5))) / (Math.log(maxAge) ) );
  return percievedAge;
}

/**
 * Get age from form
 * @return {int} the age as int; null if empty
 */
function getAge() {
  var age = $("#age").val();
  if (age !== "") {
    console.log(age);
    return parseInt(age);
  }
  else {
    return null;
  }
}

/**
 * Get location from form
 * @return {string} location as string; null if empty
 */
function getLocation() {
  var loc = $("#location").val();
  if (loc !== "") {
    return loc;
  }
  else {
    return null;
  }
}

function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
// add a zero in front of numbers<10
m=checkTime(m);
s=checkTime(s);
document.getElementById('r_clock_time').innerHTML=h+":"+m+":"+s;
t=setTimeout(function(){startTime()},500);
}

function checkTime(i)
{
if (i<10)
  {
  i="0" + i;
  }
return i;
}


function startTimePerceived()
{
var today=new Date();
h=today.getHours();
m=today.getMinutes();
s=today.getSeconds();
// add a zero in front of numbers<10
um=checkTime(m);
us=checkTime(s);
document.getElementById('p_clock_time').innerHTML=h+":"+um+":"+us;
t=setTimeout(function(){updateTimePerceived(h,m,s)},300);
}

function updateTimePerceived(h, m, s)
{
s++;
if (s == 60) {
    s = 0;
    m++;
}
if (m == 60) {
    m = 0;
    h++;
} 
if (h == 24) {
    h = 0;
}
um = checkTime(m);
us = checkTime(s);
document.getElementById('p_clock_time').innerHTML=h+":"+um+":"+us;
t=setTimeout(function(){updateTimePerceived(h,m,s)},300);
}

$( document ).ready(function() {
    startTime();
    startTimePerceived();
});

$(function() {
    // $( "#rline" ).slider();
    var link = 0;
      var slider = $( "#pline" ).slider({
      range: "max",
      min: 6,
      max: 100,
      value: 0,
      slide: function( event, ui ) {
        console.log(ui.value);
              }
    });

      $( "#rline" ).slider({
      range: "max",
      min: 6,
      max: 100,
      value: 0,
      slide: function( event, ui ) {
        console.log(ui.value);
        link = ui.value; 
        slider.slider( "value", calcPerceivedAge(ui.value, 75) );
        $( "#amount" ).val( ui.value );     }
    });

    $( "#amount" ).val($( "#rline" ).slider( "value" ) );


});