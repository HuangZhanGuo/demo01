function checkall(form) {
	var cbxoption;
	cbxoption = form.elements;
	for (i = 0; i < cbxoption.length; i++) {
		if ((cbxoption[i].tagName.toLowerCase() == "input")
				&& (cbxoption[i].type)
				&& (cbxoption[i].type.toLowerCase() == "checkbox")) {
			cbxoption[i].checked = true;
		}
	}
}
function uncheckall(form) {
	var cbxoption;
	cbxoption = form.elements;
	for (i = 0; i < cbxoption.length; i++) {
		if ((cbxoption[i].tagName.toLowerCase() == "input")
				&& (cbxoption[i].type)
				&& (cbxoption[i].type.toLowerCase() == "checkbox")) {
			cbxoption[i].checked = false;
		}
	}
}
function deleteteacher(form) {
	var teachids;
	var cbxoption;
	var m = 0;
	cbxoption = form.elements;
	for (i = 0; i < cbxoption.length; i++) {
		if ((cbxoption[i].tagName.toLowerCase() == "input")
				&& (cbxoption[i].type)
				&& (cbxoption[i].type.toLowerCase() == "checkbox")) {
			if (cbxoption[i].checked) {
				m++;
				if (m == 1)
					teachids = cbxoption[i].id;
				else
					teachids += "," + cbxoption[i].id;
			}
		}

		form.teacherids.value = teachids;
	}
	if (m == 0) {
		alert("你没有选中需要删除的老师，请重选！");
		return;
	}
	else
	{
		if(!confirm("是否将"+teachids+"选中的老师信息删除?")){
	   	  	return; 
	   }
	}
	
	location.href = "deleteTeacher.do?teachids=" + teachids;
}

function editteacher(form) {
	var cbxoption, teacherdids, username;
	cbxoption = form.elements;
	var m = 0;
	for (i = 0; i < cbxoption.length; i++) {
		if ((cbxoption[i].tagName.toLowerCase() == "input")
				&& (cbxoption[i].type)
				&& (cbxoption[i].type.toLowerCase() == "checkbox")) {
			if (cbxoption[i].checked) {
				m++;
				if (m > 1) {
					alert("一次只能修改一个老师的信息，请重选！");
					return;
				}
				teacherdid = cbxoption[i].id;
			}
		}
	}

	if (m == 0) {
		alert("你没有选中需要修改的老师，请重选！");
		return;
	}

	location.href = "editTeacher.do?teachid=" + teacherdid;
}

function modifycourse(form) {
	var cbxoption, teacherid;
	cbxoption = form.elements;
	var m = 0;
	for (i = 0; i < cbxoption.length; i++) {
		if ((cbxoption[i].tagName.toLowerCase() == "input")
				&& (cbxoption[i].type)
				&& (cbxoption[i].type.toLowerCase() == "checkbox")) {
			if (cbxoption[i].checked) {
				m++;
				if (m > 1) {
					alert("一次只能维护一个老师的课程，请重选！");
					return;
				}
				teacherid = cbxoption[i].id;
			}
		}
	}

	if (m == 0) {
		alert("你没有选中需要维护课程的老师，请重选！");
		return;
	}
	alert("teacherid"+teacherid);
	location.href = "listteachCourse.do?teacherid=" + teacherid+"&flag=list";
}