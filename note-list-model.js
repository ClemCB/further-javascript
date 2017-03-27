(function(exports) {
  var NoteList = function(note) {
    this.storedNotes = [];
    this.storedNotes.push(note);
  }

  NoteList.prototype.viewNotes = function() {
    for(var i = 0; i < this.storedNotes.length; i++) {
      return this.storedNotes[i].text;
    };
  }

  exports.NoteList = NoteList;

})(this)
