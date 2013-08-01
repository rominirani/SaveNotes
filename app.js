$(document).ready(function(){
	   $("#btnAddNote").click(function(){
		  //Change to the add-notes
		  $.mobile.changePage ($("#add-notes"));
		});

		$("#btnViewNotes").click(function(){
		  //Change to the add-notes
          $.mobile.changePage ($("#view-notes"));
		  //Empty the list first
		  $("#note-list").html("");
		  //Read the notes
		  for (i=0; i<=localStorage.length-1; i++)  
			{  
				key = localStorage.key(i);  
				val = localStorage.getItem(key);
				var noteElement = $("<div data-role='collapsible' data-mini='true'/>");
				var h3NoteTitle = $("<h3/>").text(key);
				var pNoteDetails = $("<p/>").text(val);
				noteElement.append(h3NoteTitle);
				noteElement.append(pNoteDetails);
				$("#note-list").append(noteElement);
			}  
			$('div[data-role=collapsible]').collapsible({refresh:true});
	    });
		
		//Click Handlers for Add Notes page
		$("#btnSaveNote").click(function(){
		  noteTitle = $("#noteTitle").val();
		  noteDetails = $("#noteDetails").val();
		  //alert(noteTitle + "," + noteDetails);
		  //Save it in local storage and stay there
		  if (window.localStorage) {
		      localStorage.setItem(noteTitle,noteDetails);
			  alert("Your note has been saved");
		  }
	    });
		
		$("#btnClearNotes").click(function(){
		  $("#noteTitle").val("");
		  $("#noteDetails").val("");
		  $("#noteTitle").focus();
	    });
		
		//Click Handlers for View Notes page
		$("#clearAllNotesBtn").click(function(){
		   localStorage.clear();
 		   $("#note-list").html("");
		   alert("All Notes have got cleared");
		});
});