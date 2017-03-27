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

function testNoteListSavesNote() {
  var note = new Note("My favourite language is JavaScript");
  var notelist = new NoteList(note);
  assert.isTrue(notelist.viewNotes() === "My favourite language is JavaScript");
};

testNoteReturnsText();
testNoteListSavesNote();
