function getIndex() {
    var range = quill.getSelection();
    return range ? range.index : 0;
}

// Insert Read More button
$('body').on('click', '#ql-readmore', function() {
    quill.insertText(getIndex(), "\n{readmore}\n");
});

// Insert Image (triggered from upload.js)
function quillImageInsert(filepath) {
    quill.insertText(getIndex(), '\n', Quill.sources.USER);
    quill.insertEmbed(getIndex() + 1, 'figure', filepath); // custom blot
    quill.setSelection(getIndex() + 2, Quill.sources.SILENT);
}
