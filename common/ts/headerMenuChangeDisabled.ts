export class HederMenuChangeDisabled{
  constructor(){
    $(function () {
      // 自分のURLを取得
      const pathList = window.location.pathname.split('/');
      let path = pathList.slice(-1)[0];
      path = path.split('.')[0];

      $("." + path).attr("tabindex","-1");
      $("." + path).attr("aria-disabled","true");
      $("." + path).removeClass('active');
      $("." + path).addClass('disabled');
    });
  }
}
