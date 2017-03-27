var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy.")
    }
  }
}

function testNoteReturnsText() {
  var note = new Note("My favourite language is JavaScript");
  assert.isTrue(note.viewText() === "My favourite language is JavaScript");
};

function testNoteListStoresArrayOfNotes() {
  var notelist = new NoteList;
  assert.isTrue(notelist.storedNotes.length === 0);
};

function testNoteListCreatesNote() {
  var notelist = new NoteList;
  notelist.createNote("Test note")
  notelist.createNote("Test note two")
  assert.isTrue(notelist.storedNotes.length === 2);
};

testNoteReturnsText();
testNoteListStoresArrayOfNotes();
testNoteListCreatesNote();
