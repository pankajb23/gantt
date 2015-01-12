/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 1/12/15
 * Time: 2:06 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','backbone','moment','src/views/headerView'],function(_, $, Backbone, moment, headerView){
    var leftTable = {};
    leftTable.view = Backbone.View.extend({
        el:$('#gantt-table'),
        initialize:function(){
            this.$el.append(headerView.render().$el);
        }
    });
    new leftTable.view();
});