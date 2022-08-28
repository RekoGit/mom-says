function random_msg() {
  let msgs = ['まだ？', 'そろそろ・・・', 'ねえ・・']
  return msgs[Math.floor(Math.random() * msgs.length)];
}

window.alert('時々、休憩しながら観てね！');
let init_time = new Date();
let current_time;
let time_diff;

document.addEventListener('click', function (e) {
  current_time = new Date();
  time_diff = (current_time - init_time) / 1000;

  // 前回の通知から10分以上、経過していたら通知する
  if (time_diff > (60 * 10)) {
    init_time = current_time;
    alert(random_msg() + `もう${time_diff}秒経ったよ！`);
  }

}, false);
