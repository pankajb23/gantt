/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/20/14
 * Time: 10:05 PM
 * To change this template use File | Settings | File Templates.
 */
require.config({
    baseUrl:"js/external",
    paths:{
        jquery:"jquery-1.7.1.min",
        underscore:"underscore-min",
        backbone:"backbone-min",
        handlebar:"handlebars-2.0.0",
        moment:"moment",
        bootstrap:"bootstrap.min",
        src:"../app/"
    },
    waitSeconds: 0/*,
    shim:{
        'backbone':{
            deps:['underscore','jquery'],
            exports:'backbone'
        }
    }*/
});
