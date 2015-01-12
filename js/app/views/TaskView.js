/**
 * Created by JetBrains WebStorm.
 * User: pabhardw
 * Date: 12/27/14
 * Time: 4:28 PM
 * To change this template use File | Settings | File Templates.
 */
define(['jquery','jquery-ui.min','underscore','backbone','handlebar','moment','src/model/TaskList','mediator','headerView'],
    function($,_,Backbone,HandleBar,moment,TaskList, mediator, headerView){

    var TaskListRowView = Backbone.View.extend({
        model :TaskList.model,
        tagName: 'tr',
        className: 'row-data',
        template: Handlebars.compile($('#rowDate-template').html()),
        events:{

        },
        initialize:function(data){

        },
        render:function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

     var TaskListView = Backbone.View.extend({
        model: TaskList.Collection,
        el:$('#gantt-table'),
        initialize:function(){
             this.loadAjax();//the data is been fetched
        },
        render:function(){
            var self=this;
            self.$el.html('');//erase the complete view of the previous render
            self.append(headerView);
            _.each(this.model.toArray(),function(data){
                var viewElement = new TaskListRowView({model:data});
                self.$el.append(viewElement.render().$el);
            });
            return this;
        },
        loadAjax:function(){
             var deferred = new $.Deferred(),documents = new TaskList.Collection();
             var self = this;
             documents.fetch({
                 success:function(){
                     deferred.resolve();
                     self.model=documents;
                 },error:function(){
                     deferred.reject();
                 }
             });
            return deferred.promise();
        }

     });
     return new TaskList();
     //because I only needed an object there is nothing with the class
});