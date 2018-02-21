// import React from 'react';
// var P5Wrapper = require('react-p5-wrapper');
// var dat = require('dat.gui');
// import P5Wrapper from 'react-p5-wrapper';
import dat from 'dat.gui';

export default function sketch (p) {

    // stroke_weight = strokeWeight

    var x=60, y=60, cellSz, widthCan = 2000, heightCan = 2000;
    var ROW=false, COL=true, stroke_weight=7;
    var background_color = 255;
    var line_color = 0;

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
            inverse_color: 0,
            stroke_weight : stroke_weight
        };
        gui = new dat.gui.GUI(params);


        var guiContainer = document.getElementById('datGui');
        guiContainer.appendChild(gui.domElement);

        gui.remember(controls);
        var divisions_controller = gui.add(controls, 'divisions').min(10).max(105).step(10);
        var stroke_weight_controller = gui.add(controls, 'stroke_weight').min(3).max(11).step(1);
        var inverse_color_controller = gui.add(controls, 'inverse_color').min(0).max(256).step(255);

        divisions_controller.onFinishChange(function(value) {
            x = value;
            y = value;
            p.drawGrid();
        });

        stroke_weight_controller.onFinishChange(function(value) {
            stroke_weight = value;
            p.drawGrid();
        });

        inverse_color_controller.onFinishChange(function(value) {
            if(value > 156) {
                line_color = 255;
                background_color = 0;
            }
            else {
                line_color = 0;
                background_color = 255;
            }
            p.drawGrid();
        });
    }

    p.drawGrid = function() {
        p.background(background_color);
        p.noFill();
        p.strokeWeight(stroke_weight); 

        cellSz = p.min(p.width,p.height) / x;

        for (var i = 0; i < y; i++) { 
            for (var j = 0; j < x; j++)  
                if (i > 0 && j < y-1 && i < y-1 && i < x-1 && j < x-1) {

                COL = false;
                ROW = false;

                p.stroke(line_color);
                
                if (Math.random() < 0.9) { 
                    COL = false;
                }
                else {
                    COL = true;
                    if (j  > 0) {
                        p.line(j * cellSz, cellSz + i * cellSz, // horiz 
                                (j + 1) * cellSz-1, cellSz + i * cellSz);
                    } 
                }
                
                if (Math.random() > 0.9 && !COL) {
                    ROW = false;
                }
                else {
                    ROW = true;
                    p.line((cellSz + j * cellSz), i * cellSz,
                        (cellSz + j * cellSz), (i + 1) * cellSz);   
                }
            }
        }
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

            x = 60;
            y = 60;
            widthCan = 800;
            heightCan = 800;
            stroke_weight = 7;
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
};