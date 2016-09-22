let tableData = {};

tableData.rowData=[];

for(var i in localStorage){
    let num = 0;
    if(i !== 'jfVersion'){
        tableData.rowData.push(localStorage[i])
    }
}

console.log(tableData);

return tableData;