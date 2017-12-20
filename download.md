```
const json = this.props.saveProjectSb3();
// Download project data into a file - create link element,
// simulate click on it, and then remove it.
const saveLink = document.createElement('a');
document.body.appendChild(saveLink);

const data = new Blob([json], { type: 'text' });
const url = window.URL.createObjectURL(data);
saveLink.href = url;

// File name: project-DATE-TIME
const date = new Date();
const timestamp = `${date.toLocaleDateString()}-${date.toLocaleTimeString()}`;
saveLink.download = `project-${timestamp}.json`;
saveLink.click();
window.URL.revokeObjectURL(url);
document.body.removeChild(saveLink);
```
