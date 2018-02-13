// import React from 'react';
// var P5Wrapper = require('react-p5-wrapper');
// var dat = require('dat.gui');
// import P5Wrapper from 'react-p5-wrapper';
import dat from 'dat.gui';

export default function sketch (p) {

    // stroke_weight = strokeWeight

    var x=50, y=50, cellSz, grid=[], widthCan = 800, heightCan = 800;
    var DOWN=1, RIGHT=2, px=0, py=0, stroke_weight=2;
    var background_color = [ 255, 255, 255 ];
    var line_color = [ 0, 0, 0 ]

    var gui;

    p.downloadCanvas = function() {
        var link = document.getElementById('saveBtn');
        link.href = document.getElementById('defaultCanvas0').toDataURL('image/jpeg', 1.0);
        link.download = 'Include2018_Serendipity.jpg';
        console.log("download");
    }
    
    p.initGui = function() {
        var params = {
            autoPlace: false
        }

        var controls = {
            divisions: x,
            background_red : background_color[0],
            background_green : background_color[1],
            background_blue : background_color[2],
            line_red : line_color[0],
            line_green : line_color[1],
            line_blue : line_color[2],
            stroke_weight : stroke_weight
        };
        gui = new dat.gui.GUI(params);


        var guiContainer = document.getElementById('datGui');
        guiContainer.appendChild(gui.domElement);

        gui.remember(controls);
        var divisions_controller = gui.add(controls, 'divisions').min(10).max(105).step(10);
        var stroke_weight_controller = gui.add(controls, 'stroke_weight').min(1).max(5).step(1);
        var background_red_controller = gui.add(controls, 'background_red').min(0).max(255).step(10);
        var background_green_controller = gui.add(controls, 'background_green').min(0).max(255).step(10);
        var background_blue_controller = gui.add(controls, 'background_blue').min(0).max(255).step(10);
        var line_red_controller = gui.add(controls, 'line_red').min(0).max(255).step(10);
        var line_green_controller = gui.add(controls, 'line_green').min(0).max(255).step(10);
        var line_blue_controller = gui.add(controls, 'line_blue').min(0).max(255).step(10);

        divisions_controller.onFinishChange(function(value) {
            x = value;
            y = value;
            p.drawGrid();
        });

        stroke_weight_controller.onFinishChange(function(value) {
            stroke_weight = value;
            p.drawGrid();
        });

        background_red_controller.onFinishChange(function(value) {
            background_color[0] = value;
            p.drawGrid();
        });

        background_green_controller.onFinishChange(function(value) {
            background_color[1] = value;
            p.drawGrid();
        });

        background_blue_controller.onFinishChange(function(value) {
            background_color[2] = value;
            p.drawGrid();
        }); 

        line_red_controller.onFinishChange(function(value) {
            line_color[0] = value;
            p.drawGrid();
        });

        line_green_controller.onFinishChange(function(value) {
            line_color[1] = value;
            p.drawGrid();
        });

        line_blue_controller.onFinishChange(function(value) {
            line_color[2] = value;
            p.drawGrid();
        });
    }

    p.drawGrid = function() {
        p.background(background_color[0], background_color[1], background_color[2]);
        p.noFill();
        p.strokeWeight(stroke_weight); 

        grid = [];
        cellSz = null;
        px = 0;
        py = 0;

        p.makeGrid();

        p.foreach(p.drawCell);
        p.step();
    }

    p.setup = function () {
        // CREATE GUI
        p.initGui();

        p.createCanvas(widthCan,heightCan);
        p.strokeCap(p.PROJECT);
        p.drawGrid();

        document.getElementById('saveBtn').addEventListener('click', function() {
            p.downloadCanvas();
        }, false);

        document.getElementById('resetBtn').addEventListener('click', function() {

            x = 50;
            y = 50;
            widthCan = 800;
            heightCan = 800;
            stroke_weight=2;
            background_color = [ 255, 255, 255 ];
            line_color = [ 0, 0, 0 ]

            var guiContainer = document.getElementById('datGui');
            while (guiContainer.firstChild) {
                guiContainer.removeChild(guiContainer.firstChild);
            }

            p.initGui();
            p.drawGrid();
        }, false);
    }

    p.drawCell = function (j,i) {

        // skip one row/col around edge
        if (i > 0 && j < y-1 && i < y-1 && i < x-1 && j < x-1) {
       
            var off = 0;
            p.stroke(line_color[0], line_color[1], line_color[2]);
            if (!p.exists(j, i, DOWN)) { 
                p.stroke(background_color[0], background_color[1], background_color[2]); // erase
                if (j > 1) off = stroke_weight;
            }

            if (j  > 0) {

                p.line(j * cellSz + off, cellSz + i * cellSz, // horiz 
                        (j + 1) * cellSz-1, cellSz + i * cellSz);
            } 

            off = 0;
            p.stroke(line_color[0], line_color[1], line_color[2]);
            if (!p.exists(j, i, RIGHT)) {
                p.stroke(background_color[0], background_color[1], background_color[2]); // erase
                if (i > 1) off = stroke_weight;
            }

            p.line((cellSz + j * cellSz), i * cellSz + off, // vert 
                    (cellSz + j * cellSz), (i + 1) * cellSz);   
        }
    }

    p.makeGrid = function () {

        cellSz = p.min(p.width,p.height) / x;

        for (var j = 0; j < x+1; j++) { 

            grid[j] = []; // initialize to 0 
            for (var i = 0; i < y+1; i++) 
                grid[j][i] = 0;
        }
    }

    p.step = function () {

        var dirs = (Math.random() < .9)  ? [DOWN] : [RIGHT,DOWN];
        var idx = p.floor(p.random(dirs.length));
        var dir = dirs[idx];
        p.remove_sketch(px, py, dir);

        // but weight verticals and the diagonal
        var d = p.dist(px,0,py,0) / x;
        if (Math.random()  < d) 
            p.remove_sketch(px, py, RIGHT);

        p.drawCell(px,py); 

        if (++px % x === 0) { px = 0; ++py; } 

        if (py < y-1 || px < x-1) 
            p.step();
    }

    p.foreach = function (fun) {

        for (var i = 0; i < y; i++) { 
            for (var j = 0; j < x; j++)  
                fun.apply(this,[j,i]);
        }   
    }

    p.exists = function (j,i,side) {

        switch(side) {
            case RIGHT: return (grid[j][i] < 2);
            case DOWN:  return (grid[j][i] % 2===0);
            default: return (grid[j][i] < 2);
        }
    }

    p.remove_sketch = function (j,i,side) {

        if (p.exists(j,i,side)) 
            grid[j][i] += side;
    }
};