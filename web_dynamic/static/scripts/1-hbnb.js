$(document).ready(function(){
  let selected  = []
  $('input[type="checkbox"').change(function(){
    if ($(this).prop("checked")) {
      selected.push($(this).attr("data-name"))
    } else {
      let removed = $(this).attr("data-name")
      let idx  = selected.indexOf(removed)
      selected.splice(idx, 1)
    }
  console.log(selected)
  let intext  = selected.join(", ")
  $("#selected").text(intext)
  })
})