function render(input: Array<Array<number>>): void {
    let map: HTMLTableElement = document.querySelector("#map-area");

    for (let i = 0 ; i < input.length ; i++) {
        map.appendChild(document.createElement("div"));

        for (let j = 0 ; j < input[i].length ; j++) {
            map.children[i].appendChild(document.createElement("div"));
            (map.children[i].children[j] as HTMLElement).innerText = input[i][j].toString();
            (map.children[i].children[j] as HTMLElement).classList.add("tile_" + input[i][j].toString())
        }
    }
}

export function initMap(): void {
    const socket: WebSocket = new WebSocket("ws://localhost:8765/")

    socket.addEventListener("open", (event: Event) => {
        console.log(event);
        socket.send(JSON.stringify({type: "tile", data: null}));
    });

    socket.addEventListener("message", (event: MessageEvent) => {
        let data: any = JSON.parse(event.data);

        if (data.type == "tile") {
            render(data.data);
        }
    });
}