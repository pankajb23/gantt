/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 1/12/15
 * Time: 2:06 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','backbone','moment','src/views/headerView', 'mediator', 'src/views/TaskView'],
    function(_, $, Backbone, moment, headerView, mediator, TaskView){
    var leftTable = {};
    leftTable.view = Backbone.View.extend({
        el:$('#gantt-table'),
        topElement:'',
        downElement:'',
        events:{

        },
        initialize:function(){
            //this.$el.append(headerView.render().$el);
           // mediator.on("renderTableHeader",this.topDiv,this);
            mediator.on("renderTableData",this.downDiv,this);
        },
        /*topDiv:function(topElement){
            this.topElement = topElement;
            this.$el.html('');
            this.$el.append(this.topElement);
            this.$el.append(this.downElement);
        },
        */
        downDiv:function(downElement){
            //this.downElement = downElement;
            //this.$el.html('');
            //this.$el.append(this.topElement);
            //this.$el.append(this.downElement);
        }
    });
    new leftTable.view();
});