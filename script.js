$.get("levels.txt", function(data, status) {
  let text = '';
  const myArray = data.split('\r\n');

  myArray.forEach(function(item, index) {
    text += '<div class="table">' + (index+1) + '. ' + item + '</div>';
  });

  document.getElementById('levels').innerHTML = text;
});