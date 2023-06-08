function random_msg() {
  // let msgs = ['まだ？', 'そろそろ・・・', 'ねえ・・']
  let msgs = ['Are you still wasting so much time watching YouTube?', 'Let\'s stop now..', 'Excuse me....?']
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
  // if (time_diff > (60 * 10)) {
  if (time_diff > (3)) {
    init_time = current_time;
    alert(random_msg() + `Already passed ${time_diff} seconds!`);
  }

}, false);
