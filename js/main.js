// hides the header if the user is accessing the depiction from cydia (most likely)
// cydia already shows the package name so it would just be redundant
// I also need to write this in vanilla js since using jQuery is overkill
$(function() {
  if (navigator.userAgent.match(/(Cydia)/i)) {
    $('header').hide();
    //so cydia links open in new windows
    $('head').append('<base target="_blank">');
  };
  // There is probably a way better way of doing this <<< TODO
  if (navigator.userAgent.match(/(Cydia|iPhone|iPod|iPad)/i)) {
    $('#notiOS').hide(); // This hides the message that shows if you arent on iOS to hide the repo
    $('#iOS').show(); // Shows the add repository option if they are on iOS
  } else {
  	$('#notiOS').show();
  };

  //on an iOS device but not in Cydia
  if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i) && !navigator.userAgent.match(/(Cydia)/i)) {
  	$('#iOSNotCydia').show();
  } else {
  	$('#iOSNotCydia').hide();
  };
});