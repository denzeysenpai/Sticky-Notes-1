console.log('Script connected successfully!');
var area = document.getElementById('app');
var count = 0;

function addNewNote() {
    count++;
    var newNote = document.createElement('textarea');
    newNote.setAttribute('placeholder','Sample Text Here');
    newNote.setAttribute('class','note');
    let noteID = 'note-'+count;

    newNote.setAttribute('id',noteID);
    newNote.setAttribute('onblur',"checkForEmptyValue('"+noteID+"')");

    area.appendChild(newNote);
    console.log('Added a new note');
}

function checkForEmptyValue(noteID) {
    let deleteThisNode = document.getElementById(noteID);
    if(deleteThisNode.value == '' || deleteThisNode.value == 'undefined') {
        const continueDelete = confirm('Are you sure you want to delete this note?');
        if (continueDelete) {
            console.log('Note Deleted!');
            deleteThisNode.remove();

        }
    }
}