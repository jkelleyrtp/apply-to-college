var blank_app = {
	{"name":"",
	"appid":0,
	
	"app_text":"Example text",
	"app_notes":"Example notes",
	"wordcount":2,
	
	
	
	
	
	}
	
}




  var CLIENT_ID = '607218385891-i3amg4qiptpgfmtenuqannj1jeskh5lv.apps.googleusercontent.com';

  var SCOPES = ["https://www.googleapis.com/auth/drive.appdata"];

  var CAL_ID;
  var EVENT_IDS = [];
  
  var DELAY; //queue index
  var INTERVAL = 300; //time diff for calls in ms
  
  /**
   * Check if current user has authorized this application.
   */
  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
  }
  /**
   * Handle response from authorization server.
   *
   * @param {Object} authResult Authorization result.
   */
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    var gcalDiv = document.getElementById('gcalendar-div');
    
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authorizeDiv.style.display = 'none';
      gcalDiv.style.display = 'inline';
      loadCalendarApi();
    } else {
      // Show auth UI, allowing the user to initiate authorization by
      // clicking authorize button.
      authorizeDiv.style.display = 'inline';
      gcalDiv.style.display = 'none';
    }
  }

  /**
   * Initiate auth flow in response to user clicking authorize button.
   *
   * @param {Event} event Button click event.
   */
  function handleAuthClick(event) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
    return false;
  }
    