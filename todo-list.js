$('.ui.rating')
    .rating();
$('.ui.inline.dropdown')
  .dropdown({
    allowAdditions: true
});
function note(title, content){
  this.title = title;
  this.content = content;
}
var myNote = {};

//
// $("#programmetype").dropdown({
//             onChange: function (val) {
//                 if (val == "val1")
//                 {
//                     $('#servicetype .menu').html(
//                         '<div class="item" data-value="val1">Saloon</div>' +
//                         '<div class="item" data-value="val2">Truck</div>'
//                         );
//                 };
//
$('#Menu').dropdown({
  onChange: function (val) {
    if(val == "create"){
      alert('???');
    }
  }
});
