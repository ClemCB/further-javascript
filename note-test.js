var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy.")
    }
  }
}

function doesLogMessage(funct, message) {
  var oldLog = console.log,
  result = false;

  console.log = function(s) {
    if (s == message) {
      result = true;
    }
  };
  funct();
  console.log = oldLog;
  return result;
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

function testNoteListConsolLogsNotes() {
  var notelist = new NoteList;
  notelist.createNote("Test note");
  assert.isTrue(doesLogMessage(notelist.viewNotes, "Test note"));
}

testNoteReturnsText();
testNoteListStoresArrayOfNotes();
testNoteListCreatesNote();
testNoteListConsolLogsNotes();
