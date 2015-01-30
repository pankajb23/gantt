/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */

define(['underscore','jquery','jquery-ui.min','backbone'],function(_,$,Backbone){
    $(document).ready(function(){
        var leftpane=$('#left-pane');
        var rightpane=$('#right-pane');
        var containerWidth=$('#div-bottom').width();
        $('#left-pane').resizable({
            handles: 'e',
            maxWidth:1000,
            minWidth: 450,
            resize:function(event, ui){
                var currentWidth = ui.size.width;
                $(this).width(currentWidth);
                $('#right-pane').width(containerWidth - currentWidth-20);
            }
        });

        ///for resizing the two adjacent divs
        $(".resizable th").resizable({
            handles: 'e',
            start: function(event, ui){
                var colIndex = ui.helper.index() + 1;
                this.table=$('#gantt-table');
                this.colElement = this.table.find("colgroup > col:nth-child(" + colIndex + ")");
                this.colWidth = parseInt(this.colElement.get(0).style.width, 10);
                this.originalSize = ui.size.width;
            },
            resize:function(event, ui){
                var resizeDelta = ui.size.width - this.originalSize;
                var newColWidth = this.colWidth +  resizeDelta;
                this.colElement.width(newColWidth);

                $(this).css("height","auto");
            }
        });
        //for resizing the width of a column
    });
});