/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 2:43 PM
 * To change this template use File | Settings | File Templates.
 */
define(['jquery','text!src/jsonDir/customData.json','text!src/jsonDir/modelSetting.json','text!src/jsonDir/headersList.json','mockjax'],function($, initialData, projectSettings, loadHeaders){
    $.mockjax({
        url: "../rest/loadTaskData",
        responseTime: 0,
        dataType: 'json',
        response: function(settings){
            this.responseText = initialData;
        }
    });
    $.mockjax({
        url: "../rest/loadSettings",
        responseTime: 0,
        dataType: 'json',
        response: function(settings){
            this.responseText = projectSettings;
        }
    });
    $.mockjax({
        url: "../rest/loadHeaders",
        responseTime: 0,
        dataType: 'json',
        response: function(settings){
            this.responseText = loadHeaders;
        }
    });
});