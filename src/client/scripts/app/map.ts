export function initMap(): void {
    const socket: WebSocket = new WebSocket("ws://localhost:8765/")

    socket.addEventListener("open", (event: Event) => {
        console.log(event);
        socket.send(JSON.stringify({type: "tile", data: null}));
    });

    socket.addEventListener("message", (event: MessageEvent) => {
        console.log(event.data);
    });
}