export function initMap(): void {
    let map: HTMLTableElement = document.querySelector("table#map-area");
    let data: Array<Array<string>> = new Array();

    let size: number = 2**8;

    for (let i = 0 ; i < size ; i++) {
        data.push(new Array());
        map.insertRow();

        for (let j = 0 ; j < size ; j++) {
            data[i].push("test");
            map.rows[i].insertCell();
            map.rows[i].cells[j].innerText = data[i][j];
        }
    }
    
    console.log(data);
}