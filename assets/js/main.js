---

---
$(function(){

	{% if site.programming.enable %}
	//Programming section
	//tooltips
	$("button[rel='tooltip']").tooltip();
	//progress bar setup
	$(".bar").each(function(){
		var val = parseInt($(this).attr("value"));
		$(this).progressbar({value: val});
	});
	//progress bar interactivity
	var progSelected = new Array();
	$("#programmingbuttons .btn").click(function(){
		var progVal = $(this).val();
		if($("#technologies > div." + progVal).css("display")=="none"){
			$("#technologies").prepend($("#technologies > div." + progVal))
		}
		if($(this).hasClass("active")){
			progSelected.splice(progSelected.indexOf(progVal), 1);
		}else{
			progSelected.push(progVal);
		}
		$("#technologies > div").each(function(){
			var currenttech = $(this);
			var doshow = false;
			$.each(progSelected, function(index, value){
				if(currenttech.hasClass(value)){
					doshow = true
				}
			});
			if(doshow){
				currenttech.show("fast");
			}else{
				currenttech.hide("fast");
			}
		});
	});
	{% endif %}

	{% if site.contact.enable %}
	//Contact section animation
	$(".contact").mouseover(function(){
		var contact = $(this).attr("id");
		if($("#" + contact + "-display").css("display")!="inline"){
			$(".contact-display").hide("fast");
			$("#" + contact + "-display").show("fast");
			$("#contactlink").attr("href", $("#" + contact).parent("a").attr("href"));
		}
	});
	{% endif %}

});