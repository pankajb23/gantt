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
            'change input[name="start-date"]':'change_start_date',
            'change input[name="end-date"]':'change_end_date',
            'change input[name="activity-Name"]':'change_activity_name',
            'click .show_list':'add_Drop_Down',
            'click .insert-row-down':'insert_Row',
            'click .delete-current-row':'delete_Row'

        },
        add_Drop_Down:function(){
            var row_li_item = this.$el.find('li');
            if(!((this.$el).hasClass('drop_down')))
                row_li_item.append("<ul class='drop_down'><li><a href='#' class='insert-row-down'>insert row</a></li><li><a href='#' class='delete-current-row'>delete</a></li></ul>");
        },
        insert_Row:function(){
            taskListView.add_New_Row(this.model);
        },
        delete_Row:function(){
            this.model.destroy();
            taskListView.renderTableData();
        },
         change_start_date:function(e){
            var val=$(e.currentTarget).val();
            var date = moment(val).format("MM/DD/YYYY");
            var index = taskListView.model.get({model:this.model});
            this.model.set({startDate:date});
            //taskListView.model.setElement({model:this.model}, {remove: false});
            //taskListView.setElement({model:this.model},{remove:false});
         },
         change_end_date:function(e){
             var val=$(e.currentTarget).val();
             var date = moment(val).format("DD/MM/YYYY");
             var index = taskListView.model.get({model:this.model});
             this.model.set({endDate:date});
             //taskListView.model.setElement({model:this.model}, {remove: false});
             //taskListView.setElement({model:this.model},{remove:false});
         },
         change_activity_name: function(e){
            var val= $(e.currentTarget).val();
            var index = taskListView.model.get({model:this.model});
            this.model.set({activityName: val});
            //taskListView.model.setElement({model:this.model}, {remove: false});
            //taskListView.setElement({model:this.model},{remove:false});
        },
        initialize:function(data){

        },
        basic_check:function(){
               var date_formats="MM/DD/YYYY";
               if(!moment(this.model.get('startDate'), date_formats).isValid()){
                   var today = moment(moment().format('L')).format("MM/DD/YYYY");
                   this.model.set({startDate: today});
               }
               if(!moment(this.model.get('endDate'), date_formats).isValid()){
                   var today = moment(moment().format('L')).format("MM/DD/YYYY");
                   this.model.set({endDate: today});
               }

        },
        render:function(){
            this.basic_check();
            (this.$el).html(this.template(this.model.toJSON()));
            (this.$el).attr('id',this.model.cid);
            //taskListView.model.setElement({model:this.model}, {remove: false});
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
        add_New_Row:function(model){
                var new_Model = new TaskListContainer.model();
                var index = this.model.indexOf(model);
                this.model.add({model:new_Model},{at: index+1});
                this.renderTableData();
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
        remove_Model: function(model){

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

     var taskListView = new TaskListView.table();
     return taskListView;
     //because I only needed an object there is nothing with the class
});