const generateString = () => Math.random().toString(36).slice(2);
const sleep = (delay = 0) => new Promise((res) => setTimeout(res, delay));

export class Api {
  static async loadKeys() {
    await sleep(200);
    return [];
  }

  static async generateKey() {
    await sleep(200);
    return generateString();
  }

  static async addUsedKey(_value) {
    await sleep(200);
    return true;
  }

  static async removeUsedKey(_value) {
    await sleep(200);
    return true;
  }
}
