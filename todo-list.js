$('.ui.rating')
    .rating();
$('.ui.inline.dropdown')
  .dropdown({
    allowAdditions: true
});

var item = $('#items');
var myNote = new Array();

function note(title, content){
  this.title = title;
  this.content = content;
}

//배열의 title을 받아 item을 추가 시켜줄 수 있는 html 코드로 변환해주는 함수
function itemMsg(title){
  var msg = $('<div class="item">'+title+'<div class="ui rating" data-max-rating="1"></div></div>');
  return msg;
};
//드롭다운의 아이템을 배열의 값에 따라 업데이트 시켜준다.
function updateItem(){
  var initmsg = $('<div class="item" data-value="create">create todo<i class="plus icon"></i>');
  for(var i in myNote){
    item.html(initmsg.html());
    item.append(itemMsg(myNote[i].title).html());
  }
}
function create(title, content) {
  var newNote = note(title, content);
  myNote.push(newNote);
  updateItem();
};

$('#update-btn').click(function() {
  var title = $('#title').val();
  var content = $('#content').val();
  alert(title+content); //여기까지됨..
  create(title, content);
});
$('#Menu').dropdown({
  onChange: function (val) {
    if(val == "create"){
      $('#default-text').hide();
      $('#todo-list-content').show();
    }
  }
});
