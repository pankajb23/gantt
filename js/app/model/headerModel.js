/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 6:27 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','backbone','moment'],function(_,$,Backbone,moment){
    var header={};
    var urlRoot = "../rest/loadHeaders";
    header.Model=Backbone.Model.extend({
        defaults:{
            type:0,
            name:'',
            sorttable:0,
            currentState:0,
            currentStateSort:'',
            uuid:''
        }
    });
    header.Collection=Backbone.Collection.extend({
        model:header.Model,
        url:function(){
            return urlRoot;
        }
    });
    return header;
});
/*
    type    --type of the header (yet to be decided)
    name    --name of the header
    uuid    --uuid of the header
    sorttable   --boolean variable to judge whether the column is sorttable or not
    currentState    --no use to be particular(yet to be decided)
    currentStateSort -- it depicts whether currentStateSort in which state (descending, ascending, or non-valid state);


*/