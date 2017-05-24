$('.ui.rating')
    .rating();
$('.ui.inline.dropdown')
  .dropdown({
    allowAdditions: true
});

var item = $('#items');
var tempItem;
var myNote = new Array();

function note(title, content){
  this.title = title;
  this.content = content;
}

//배열의 title을 받아 item을 추가 시켜줄 수 있는 html 코드로 변환해주는 함수
function itemMsg(i, title){
  var msg =$('<div><div class="item" data-value='+i+'>'+title+'<div class="ui rating" data-max-rating="1"></div></div>');
  return msg;
};
//드롭다운의 아이템을 배열의 값에 따라 업데이트 시켜준다.
function updateItem(){
  var initmsg = $('<div><div class="item" data-value="create">create todo<i class="plus icon"></i></div></div>');
  item.html(initmsg.html());
  for(var i=0;i<myNote.length;i++){
    console.log(itemMsg(i, myNote[i].title).html());
    item.append(itemMsg(i, myNote[i].title).html());
  }
}
function createItem(title, content) {
  var newNote = new note(title, content);
  myNote.push(newNote);
  updateItem();
};
function editItem(title, content){
  myNote[tempItem] = new note(title, content);
  updateItem();
};
function deleteItem(){
  myNote.splice(tempItem, 1);
  updateItem();
};

$('#delete-btn').click(function(){
  deleteItem();
  goHome();
})
$('#update-btn').click(function() {
  var mode = $(this).val();
  if( mode == 'Save'){
    var title = $('#title').val();
    var content = $('#content').val();
    createItem(title, content);
    alert("ok");
    $('#title').val("");
    $('#content').val("");
    goHome();
  }
  else if(mode == 'Update'){
    var title = $('#title').val();
    var content = $('#content').val();
    editItem(title, content);
    $('#update-btn').val("Save");
    goHome();
  }
  else if(mode == 'Edit'){
    $('#title').attr("readonly",false);
    $('#content').attr("readonly",false);
    $('#update-btn').html("Save");
    $('#update-btn').val("Update");
  }

});

function goHome(){
  $('#default-text').show();
  $('#todo-list-content').hide();
  $('#menu-text').html('my todo-list...');
};

$('#Menu').dropdown({
  onChange: function (val) {
    $('#default-text').hide();

    if(val == "create"){
      $("#delete-btn").hide();
      $('#update-btn').html("Save");
      $('#update-btn').val("Save");
      $('#todo-list-content').show();
    }
    else{
      $('#todo-list-content').show();
      $("#delete-btn").show();
      $('#update-btn').html("Edit");
      $('#update-btn').val("Edit");

      tempItem = Number(val);
      $('#title').val(myNote[tempItem].title);
      $('#content').val(myNote[tempItem].content);
      $('#title').attr("readonly",true);
      $('#content').attr("readonly",true);
    }
  }
});
