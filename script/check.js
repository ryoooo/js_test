document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('btn').addEventListener('click', function(){
    document.getElementById('ps1').textContent = ps.value;
    window.alert(ps.value + 'を追加しました');
  }, false);
}, false);


document.addEventListener('DOMContentLoaded', function(){
  //click then open dialog
  document.getElementById('btn2').addEventListener('click',function(){
    //array fo cheklist
    var result = [];
    var checks = document.getElementsByName('ck');

    //
    for (var i = 0, len = checks.length; i < len; i++){
      var check = checks.item(i);
      //
      if (check.checked){
        result.push(check.value);
      }
    }
    //
    window.alert(result.toString() + 'を追加しました');
    document.getElementById('ck1').textContent = result.toString();
  },false);
}, false);

//cdv out

//output
/*
document.addEventListener('click', function(){
  ps1 = document.getElementById(ps.value);
  ck1 = document.getElementsByName(result.value)

  document.getElementById('ps1').textContent = ps1
  document.getElementById('ck1').textContent = ck1
  ck = document.getElementsByName('ck');
  ps = document.getElementById('ps');

  var table = document.createElement('table');
  document.body.appendChild(table);

  var tbody = document.createElement('tbody');
  table.appendChild(tbody);

  var tr0 = document.createElement('tr');
  var tr1 = document.createElement('tr');
  var tr2 = document.createElement('tr');
  tbody.appendChild(tr0);
  tbody.appendChild(tr1);
  tbody.appendChild(tr2);

  var text = document.createTextNode('ps')
  var text = document.createTextNode('ck')

  tr0.txtContent = ck.toLocateString();
  tr1.txtContent = ps.toLocateString();

},false)
*/
