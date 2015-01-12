/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 6:27 PM
 * To change this template use File | Settings | File Templates.
 */
define(['underscore','jquery','backbone','moment','src/model/headerModel','handlebar','mediator','src/compile-template'],
    function(_, $, Backbone, moment, header, HandleBar, mediator, JST){

    var urlRoot="../rest/loadSetting";
    var headerList={};
    headerList.RowView = Backbone.View.extend({
        model:header.Model,
        el:$('th'),
        template: JST.rowThHandlebar,
        events:{

        },
        initialize:function(){

        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });
    headerList.GridView = Backbone.View.extend({
        model: header.collection,
        el:$('tr'),
        initialize:function(){
            this.loadAjax();
        },
        render:function(){
            var self=this;
            _.each(self.model.toArray(),function(dataModel){
                 var headerElement = new headerList.RowView({model:dataModel});
                 self.$el.append(headerElement.render().$el);
            });
            return this;
        },
        loadAjax : function(){
            var deferred = $.Deferred();
            var headers = new header.Collection();
            var self = this;
            headers.fetch({
                success:function(){
                    deferred.resolve();
                    self.model = headers;
                    self.render();
                },
                error:function(){
                    deferred.reject();
                }
            });
            return deferred.promise();
        }
    });
    return new headerList.GridView();
});