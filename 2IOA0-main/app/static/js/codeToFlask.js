function codeToFlask(){
    var code = Blockly.Python.workspaceToCode(workspace);
    console.log(code);

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/codeToFlask', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        code: code
    }));
}
