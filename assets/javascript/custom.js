var SAVE_NAME = "jkelleyrtp_apply-to-college";

var BACKUP_DATA_NAME = "jkelleyrtp_apply-to-college-BACKUP";

var blank_college = {
	name:"EveRy University",
	formID:0,
	essays:[]
}

var blank_essay = {
	prompt:"What's your favorite food?",
	aka:"food essay",
	essay:"Lorem ipsum dolor",
	notes:"Lorem ipsum dolor 2",
	wordcount:0	
}

var application_data = {
	applications:[]	
}

function listApplications(){
	var app_data = JSON.parse(localStorage.getItem(SAVE_NAME));
	console.log(app_data);
	if (!app_data){
		alert('no data found!');
	}
	
	var id = 0;
	for (form in app_data.applications){
		id = app_data.applications[form].formID
		$("#data_list").prepend("<div id='application-"+id+"' class='container2'></div>");
		$("#application-"+id).append("<div> <img src='assets/images/arrow-right.png' class='tabArrow'> </div>")
		$("#application-"+id).append(`
			<div>
				<a href='application.html?appid=`+id+`'>
				<h3>`+app_data.applications[form].name+`</h3>
				</a>
			
				<div style="float:right,font-size:.6em"> Some percent complete </div>
			</div>`);
	}
	
}

function dummyData(){
	var college_list = ["Stanford University", "Rex University", "EveRy University", "University of Michigan"];
	var dummy_college = blank_college;
	dummy_college.essays.push(blank_essay);
	
	for (college in college_list){
		var temp_college = jQuery.extend(true, {}, dummy_college);
		temp_college.name = college_list[college];
		temp_college.formID = college
		application_data.applications.push(temp_college);			
	}

	localStorage.setItem(SAVE_NAME, JSON.stringify(application_data));
	
}