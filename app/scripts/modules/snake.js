define(['jquery'], function ($) {
    'use strict';

    var CELLS_SIZE          = 15,
        NB_WIDTH_BLOCKS     = 80,
        NB_HEIGHT_BLOCKS    = 40;

    var width   = NB_WIDTH_BLOCKS * CELLS_SIZE;
    var height  = NB_HEIGHT_BLOCKS * CELLS_SIZE;

    var canvas  = document.getElementById("grid");
    var ctx     = canvas.getContext("2d");
        
    canvas.width    = width;
    canvas.height   = height;

    var Snake = {

        initGame : function() {
            Snake.drawGrid();
        },

        drawGrid : function() {
            ctx.fillStyle   = 'rgba(255, 255, 255, .05)';
            ctx.strokeStyle = 'rgba(255, 255, 255, .2)';
            ctx.strokeRect(0, 0, canvas.width, canvas.height);
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 1;

            for (var x = 0; x <= canvas.width; x += CELLS_SIZE) {
                ctx.moveTo(x + CELLS_SIZE, 0);
                ctx.lineTo(x + CELLS_SIZE, canvas.height);
            }


            for (var x = 0; x <= canvas.height; x += CELLS_SIZE) {
                ctx.moveTo(0, x + CELLS_SIZE);
                ctx.lineTo(canvas.width, x + CELLS_SIZE);
            }

            ctx.strokeStyle = 'rgba(0,0,0,.1)';
            ctx.stroke();

        }

    };

    Snake.initGame();

});