# -*- coding: utf-8 -*-
"""
Medievalization

Webserver root
"""
import os

import flask
from flask import Flask, Response, render_template

print(os.path.abspath("../client/templates"))

server: Flask = flask.Flask(
    __name__, template_folder=os.path.abspath("client/templates")
)


@server.route("/dist/<path:filename>")
def dist(filename: str) -> Response:
    """/dist/<path:filename>

    Serve static files
    """
    return flask.send_from_directory(os.path.abspath("../dist"), filename)


@server.route("/src/<path:filename>")
def src(filename: str) -> Response:
    """/src/<path:filename>

    Serve source files
    """
    return flask.send_from_directory(os.path.abspath("./"), filename)


@server.route("/assets/<path:filename>")
def assets(filename: str) -> Response:
    """/assets/<path:filename>

    Serve assets files
    """
    return flask.send_from_directory(os.path.abspath("../assets"), filename)


@server.route("/dev")
def dev() -> Response:
    """/dev

    Development endpoint
    """
    return flask.make_response(flask.render_template("dev.html"))
