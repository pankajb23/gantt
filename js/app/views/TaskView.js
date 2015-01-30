/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 4:28 PM
 * To change this template use File | Settings | File Templates.
 */
define(['jquery', 'underscore', 'backbone', 'moment', 'src/model/TaskList', 'mediator',  'src/compile-template', 'src/views/headerView'],
    function($, _, Backbone, moment, TaskListContainer, mediator,  JST, headerView){

    var TaskListView = {};

     TaskListView.row =  Backbone.View.extend({
        model :TaskListContainer.Model,
        tagName: 'tr',
        className: 'table-row',
        template: JST.rowDateTemplate,
        events:{

        },
        initialize:function(data){

        },
        render:function(){
            (this.$el).html(this.template(this.model.toJSON()));
            return this;
        }
    });

     TaskListView.table = Backbone.View.extend({
        model: TaskListContainer.Collection,
        el:$('#gantt-table'),
        initialize:function(){
            this.loadAjax();//the data is been fetched
            //mediator.on("renderTableHeader",this.topDiv,this);
        },
        render:function(){
            var self=this;
            self.$el.html('');//erase the complete view of the previous render
            _.each(this.model.toArray(),  function(data){
                var viewElement = new TaskListView.row({model: data});
                self.$el.append(viewElement.render().$el);
            });
            return this;
        },
        loadAjax:function(){
             var deferred = new $.Deferred();
             var documents = new TaskListContainer.Collection();
             var self = this;
             documents.fetch({
                 success:function(){
                     deferred.resolve();
                     self.model=documents;
                     self.renderTableData();
                 },error:function(){
                     deferred.reject();
                 }
             });
            return deferred.promise();
        },
        renderTableData:function(){
            var self = this;
            self.$el.html('');
            self.$el.append(headerView.$el);
            _.each(this.model.toArray(), function(data){
                var viewElement = new TaskListView.row({model: data});
                self.$el.append(viewElement.render().$el);
            });
            //mediator.trigger("renderTableData",self.$el);
            return this;
        }
     });
     return new TaskListView.table();
     //because I only needed an object there is nothing with the class
});