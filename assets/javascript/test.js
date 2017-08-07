var SAVE_NAME = "jkelleyrtp_apply-to-college";

var BACKUP_DATA_NAME = "jkelleyrtp_apply-to-college-BACKUP";

var blank_college = {
	name:"EveRy University",
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
	college_applications:[]	
}

function listApplications(){
	var app_data = localStorage.getItem(SAVE_NAME);
	if (!app_data){
		alert('no data found!');
	}
	
	for (form in app_data.college_applications){
		$("#data_list").append("<div>hello world</div>");
	}
	
}

function dummyData(){
	var college_list = ["Stanford University", "Rex University", "EveRy University", "University of Michigan"];
	var dummy_college = blank_college;
	dummy_college.essays.push(blank_essay);
	
	for (college in college_list){
		var temp_college = jQuery.extend(true, {}, dummy_college);
		temp_college.name = college_list[college];
		application_data.college_applications.push(temp_college);			
	}

	localStorage.setItem(SAVE_NAME, JSON.stringify(application_data));
	
}