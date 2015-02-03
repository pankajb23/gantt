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
        //idAttribute only for those id's which we want to sync with the backend unique key
        //hence idAttribute would be same as the designed
        idAttribute:'',
        defaults:{
            type:0,
            value:0,
            level:0,
            startDate:0,
            endDate:0,
            activityStatus:0,
            activityCompletedPercent:0,
            daySpent:0,
            activityName:"Activity name"
        },
        initialize:function(){

        },
        setActivity: function(activityName){
            this.activityName = activityName;
        }
    });
    Task.Collection = Backbone.Collection.extend({
        model: Task.model,
        url:function(){
            return urlRoot;
        },
        /*It turns out collection can also listen to changes in their models*/
        initialize:function(){

        }
    });
    return Task;
});