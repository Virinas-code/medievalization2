# -*- coding: utf-8 -*-
"""
Medievalization Server

Main
"""
from websockets.server import WebSocketServerProtocol


async def server(websocket: WebSocketServerProtocol) -> None:
    """
    Server
    """
    async for message in websocket:
        await websocket.send(message)
