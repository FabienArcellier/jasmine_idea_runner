## Motivation

When you are using Intellij, you may run a jasmine spec file in debug mode. \
You can do this by replacing node interpreter by `jasmine-node` in *Languages & Frameworks* / *Node.js and NPM*.

Unfortunately, ``jasmine-node`` doesn't implement the support of debug instruction like ``--debug-brk`` and ``--expose_debug_as`` used
by intellij.

Inspired of Mocha implementation, it's an attent to implement this feature over `jasmine-node`.

## Synopsis

`jasmine-idea-runner` is an attempt to add the support of debug run of a jasmine spec file on Idea EDI.

## Installation

```bash
npm install jasmine-idea-runner
```

In IDEA Intellij, add the interpreter `jasmine-idea-runner` in *Languages & Frameworks* / *Node.js and NPM* and replace the
default interpreter by it.

## Contributors

* Fabien Arcellier

## License

    Copyright (c) 2017, Fabien Arcellier 
    All rights reserved. 
    
    Redistribution and use in source and binary forms, with or without 
    modification, are permitted provided that the following conditions are met: 
    
     * Redistributions of source code must retain the above copyright notice, 
       this list of conditions and the following disclaimer. 
     * Redistributions in binary form must reproduce the above copyright 
       notice, this list of conditions and the following disclaimer in the 
       documentation and/or other materials provided with the distribution. 
    
    THIS SOFTWARE IS PROVIDED BY THE AUTHOR AND CONTRIBUTORS ``AS IS'' AND ANY 
    EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED 
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE 
    DISCLAIMED. IN NO EVENT SHALL THE AUTHOR OR CONTRIBUTORS BE LIABLE FOR ANY 
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES 
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR 
    SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER 
    CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT 
    LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY 
    OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH 
    DAMAGE. 