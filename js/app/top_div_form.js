/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/23/14
 * Time: 12:23 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','jquery-ui.min','backbone'],function(_,$,Backbone){
    $(document).ready(function(){
        $(document).keydown(function(e){
            if(e.keyCode == 45){
                $('#popForm1').css('display','block');
                console.log("insert pressed!");
            }
        });
    });
});