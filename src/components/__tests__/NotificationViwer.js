import NotificationsViewer from "../NotificationsViewer";
import React from "react";
import { delay } from "redux-saga";
import renderer from "react-test-renderer";

jest.mock("../../services/NotificationService");
const serv = require("../../services/NotificationService").default;

describe("THe notification viewer", () => {
  beforeAll(() => {
    serv.__setCount(5);
  });

  it("should display the correct number of notifications", async () => {
    const tree = renderer.create(<NotificationsViewer />);

    await delay(1000);
    const instance = tree.root;
    const component = instance.findByProps({ className: "notifications" });
    const text = component.children[0];

    expect(text).toEqual("5 Notifications Awaiting");
  });
});
