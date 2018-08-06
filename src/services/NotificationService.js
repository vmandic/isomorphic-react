import { delay } from "redux-saga";

export default {
  async GetNotifications() {
    console.warn("REAL NOTIFICATION SERVICE! REACLY CONTACTING SERVER!");
    await delay(1000);
    return { count: 42 };
  }
};
