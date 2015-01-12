/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','backbone'],function(_,$,Backbone){
    var Task={};
    var urlRoot ="../rest/loadTaskData";
    Task.model = Backbone.Model.extend({
        /*
        Setting the default value of the the model
         */
        idAttribute:'primaryKey',
        defaults:{
            type:0,
            value:0,
            level:0,
            startDate:0,
            endDate:0,
            activityStatus:0,
            activityCompletedPercent:0
        },
        initialize:function(){

        }
    });
    Task.Collection = Backbone.Collection.extend({
        model: Task.model,
        url:function(){
            return urlRoot;
        },
        initialize:function(){

        }

    });
    return Task;
});