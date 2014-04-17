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
  var percievedAge = ( (maxAge * (Math.log(age-5))) / (Math.log(maxAge) );)
  return percievedAge;
}

/**
 * Get age from form
 * @return {int} the age as int; null if empty
 */
function getAge() {
  var age = $("#age").val();
  if (age !== "") {
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
