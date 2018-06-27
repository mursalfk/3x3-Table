function insertData(){
    let table = document.getElementById('table');
    let row, col, idCol;
    let counter1 , counter2;
    counter1 = 0;
    r();
    function r(){
    //    row= table.insert
        row = table.insertRow(counter1)
        counter1++;
        counter2 = 0;
        function insertColumn(){
            col = row.insertCell(counter2);
            col.innerText="aaa";
            idCol= col.setAttribute('id',3);
            console.log(idCol)
            counter2++;
            if(counter2<3){
                insertColumn();
            }
        }
        insertColumn();
        if(counter1<3){
            r();
        }  
    }    
}
insertData();

function press(){
    document.getElementById('1')
}