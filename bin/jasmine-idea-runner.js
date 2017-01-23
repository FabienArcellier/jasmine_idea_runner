#!/usr/bin/env node
'use strict';

const DEBUG_ARG = "--debug-brk";

var spawn = require('child_process').spawn;
var path = require('path');

main(process.argv);

function main(argv) {
    var node_args = buildNodeArguments(argv);
    var proc = spawn(process.execPath, node_args, {stdio: 'inherit'});

    proc.on('exit', function (code, signal) {
        process.on('exit', function () {
            if (signal) {
                process.kill(process.pid, signal);
            } else {
                process.exit(code);
            }
        });
    });

    // terminate children.
    process.on('SIGINT', function () {
        proc.kill('SIGINT'); // calls jasmine_node_runner.abort()
        proc.kill('SIGTERM'); // if that didn't work, we're probably in an infinite loop, so make it die.
    });
}

function buildNodeArguments(argv) {
    var node_run_in_debug = false;
    var jasmine_node_runner = path.join(__dirname, '../../.bin/jasmine-node');
    var node_args = [jasmine_node_runner];

    fetchArguments(argv).forEach(function (arg) {
        var arg_key = arg.split("=")[0];
        if (isNodeDebugArgument(arg_key)) {
            node_args.unshift(arg);
        } else {
            node_args.push(arg);
        }

        if (arg_key == DEBUG_ARG && node_run_in_debug == false) {
            // set the flag to start node in debug mode
            node_args.unshift('--debug');
            node_run_in_debug = true;
        }
    });

    return node_args;
}

function isNodeDebugArgument(arg_key) {
    const NODE_ARGS = ["--debug", "--debug-brk", "--expose_debug_as"];

    var is_node_argument = false;
    if(NODE_ARGS.indexOf(arg_key) != -1) {
        is_node_argument = true;
    }

    return is_node_argument;
}

function fetchArguments(argv) {
    /**
     * IDEA Intellij call nodejs and an argument that is the interpreters from settings
     * ['/usr/bin/nodejs', '$PWD/node_modules/.bin/jasmine-jasmine_node_runner-idea', ...]
     *
     * We want to ignore those arguments
     */
    return argv.slice(2);
}

