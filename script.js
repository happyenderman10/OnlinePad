const last = localStorage.getItem('notepad_doc')
const name = localStorage.getItem('notepad_doc_name')
document.getElementById('change_name').hidden = true
document.getElementById('cndone').hidden = true
document.getElementById('close').hidden = true 
function pass(){
	return ""
}
if (last == null){
	pass()
}
else{	
	document.getElementById('e').value = last
}
if (name == null){
	document.getElementById('name').innerText = "New file.txt"
	localStorage.setItem('notepad_doc_name','New file.txt')
}
else{
	document.getElementById('name').innerText = name
}
function cop(){
	const value = document.getElementById('e').value
	navigator.clipboard.writeText(value);
}
function save(filename, data) {
    const blob = new Blob([data], {type: 'text/txt'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename;        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}
function save(filename, data) {
    const blob = new Blob([data], {type: 'text/txt'});
    if(window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename + ".txt");
    }
    else{
        const elem = window.document.createElement('a');
        elem.href = window.URL.createObjectURL(blob);
        elem.download = filename + ".txt";        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
    }
}
function download(){
	const value = document.getElementById('e').value 
	const name = localStorage.getItem('notepad_doc_name')
	save(name,value)
}
function newfile(){
	const verif = confirm("Are you sure want to delete this notes?")
	if (verif == true){
		document.getElementById('e').value = ""
		const value = document.getElementById('e').value 
		localStorage.setItem('notepad_doc',value)
		localStorage.setItem('notepad_doc_name','New file.txt')
		document.getElementById('name').innerText = "New file"
	}
	if (verif == false){
		return
	}
}
function savet(){
	const value = document.getElementById('e').value 
	localStorage.setItem('notepad_doc',value)
}
function change_name(){
	const new_name = document.getElementById('new_name').value 
	localStorage.setItem('notepad_doc_name',new_name)
	document.getElementById('change_name').hidden = true
	document.getElementById('cndone').hidden = false
	document.getElementById('close').hidden = false
	document.getElementById('cndone').innerHTML = `<i class="fa fa-check"></i> Changed Document name!`
	document.getElementById('name').innerText = new_name
}
function show_cn(){
	document.getElementById('change_name').hidden = false 
}
function close_cn(){
	document.getElementById('change_name').hidden = true 
}
