export const downloadFileType = (response, name) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name);
    link.click();
    window.URL.revokeObjectURL(url);
}


export async function readFile(file) {
    const reader = new FileReader();
    reader.readAsText(file);
    const result = await new Promise((resolve, reject) => {
      reader.onload = function(event) {
        resolve(reader.result)
      }
    })   

    return result;
  }
  