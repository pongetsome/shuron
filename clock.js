// 時計のメインとなる関数
function clock()
{
    // 曜日を表す各文字列の配列
    var weeks = new Array("Sun","Mon","Thu","Wed","Thr","Fri","Sat");
    // 現在日時を表すインスタンスを取得
    var now = new Date();
    // 年
    var y = now.getFullYear();
    // 月 0~11で取得されるので実際の月は+1したものとなる
    var mo = now.getMonth() + 1;
    // 日
    var d = now.getDate();
    // 曜日 0~6で日曜始まりで取得されるのでweeks配列のインデックスとして指定する
    var w = weeks[now.getDay()];
    // 時
    var h = now.getHours();
    // 分
    var mi = now.getMinutes();
    // 秒
    var s = now.getSeconds();
    
    // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (mo < 10) mo = "0" + mo;
    if (d < 10) d = "0" + d;
    if (mi < 10) mi = "0" + mi;
    if (s < 10) s = "0" + s;


    var dead = new Date('2019/07/31 14:00:00');

    //差日を求める（86,400,000ミリ秒＝１日）
    var remain_d = Math.floor((dead - now) / 86400000);

    //差時間を求める（3,600,000ミリ秒＝１時間）
    var remain_h = Math.floor(((dead - now) % 86400000) / 3600000);

    //差分を求める（60,000ミリ秒＝１分）
    var remain_mi = Math.floor(((dead - now) % 3600000) / 60000);

    //差秒を求める（1,000ミリ秒＝１分）ここだけ切り上げ
    var remain_s = Math.ceil(((dead - now) % 60000) / 1000);

    
    if (remain_s==60){
        remain_s=0;
        remain_mi=remain_mi+1;
    }
    
   // 日付時刻文字列のなかで常に2ケタにしておきたい部分はここで処理
    if (remain_d < 10) remain_d = "0" + remain_d;
    if (remain_mi < 10) remain_mi = "0" + remain_mi;
    if (remain_s < 10) remain_s = "0" + remain_s;

    //　HTML: <span id="clock_date">(ココの日付文字列を書き換え)</span>
    document.getElementById("clock_date").innerHTML =  y + "/" + mo + "/" + d + " (" + w + ")" + "  " + + h + ":" + mi + ":" + s;
    //　HTML: <span id="clock_time">(ココの時刻文字列を書き換え)</span>
    document.getElementById("clock_time").innerHTML = remain_d + "日" + remain_h + "時間" + remain_mi + "分" + remain_s + "秒";
    //　HTML: <div id="clock_frame"> の内部要素のフォントサイズをウインドウサイズの10分の1ピクセルに設定
    document.getElementById("clock_frame").style.fontSize =  window.innerWidth / 10 + "px";
}

// 上記のclock関数を1000ミリ秒ごと(毎秒)に実行する
setInterval(clock, 1000);
