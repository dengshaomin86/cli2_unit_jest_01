import axios from "axios";

const ct = {
  disabled: false,
  sourceArr: [],
  // 设置 CancelToken
  set() {
    if (this.disabled) return;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    ct.push(source);
    return source.token;
  },
  // 存入 source
  push(source) {
    if (this.disabled) return;
    source.token && this.sourceArr.push(source);
  },
  // 取消请求
  cancel() {
    if (this.disabled) return;
    this.sourceArr.forEach(source => {
      source.cancel && source.cancel();
    });
    this.sourceArr = [];
  },
  // 删除请求成功的项
  remove(response) {
    if (this.disabled) return;
    const cancelToken = response.config.cancelToken;
    if (!cancelToken) return;
    const index = this.sourceArr.findIndex(item => item.token === cancelToken);
    if (index >= 0) this.sourceArr.splice(index, 1);
  },
};

export default ct;
