#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Medievalization

Server launcher
"""
from web import server


def main() -> None:
    """Start the Web server."""
    return server.run("0.0.0.0", 8080, debug=True)


if __name__ == "__main__":
    main()
