/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/29/14
 * Time: 11:13 AM
 * To change this template use File | Settings | File Templates.
 */
define(['handlebar','text!src/templates/row-th-template.hbs'],function(Handlebar, row_th){
    return {
        rowThHandlebar: Handlebar.compile(row_th)
    };
});