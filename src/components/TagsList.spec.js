import React from "react";
import TagsList from "./TagsList";
import renderer from "react-test-renderer";

describe("The tags list", () => {
  it("renders tags list", () => {
    const tree = renderer
      .create(<TagsList tags={["css", "html", "swift"]} />)
      .toJSON();
    console.log(tree);

    expect(tree).toMatchSnapshot();
  });
});
