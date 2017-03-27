(function(exports) {
  var NoteList = function() {
    this.storedNotes = [];
  }

  NoteList.prototype.viewNotes = function() {
    for (var i = 0; i < this.storedNotes.length; i++) {
      console.log(this.storedNotes[i].text)
    };
  }

  NoteList.prototype.createNote = function(text) {
    this.storedNotes.push(new Note(text));
  };

  exports.NoteList = NoteList;

})(this)
