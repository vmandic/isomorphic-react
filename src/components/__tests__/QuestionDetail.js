import { mapStateToProps, QuestionDetailDisplay } from "../QuestionDetail";
import renderer from "react-test-renderer";
import React from "react";

describe("The question detail component", () => {
  describe("The Container Element", () => {
    describe("mapStateToProps", () => {
      it("should map the state to props correctly", () => {
        // ARRANGE:
        const sampleQuestion = {
          question_id: 42,
          body: "random text"
        };
        const appState = {
          questions: [sampleQuestion]
        };
        const ownProps = {
          question_id: 42
        };

        // ACT:
        const compState = mapStateToProps(appState, ownProps);

        // ASSERT:
        expect(compState).toEqual(sampleQuestion);
      });
    });
  });
  describe("The display element", () => {
    it("Should not regress", () => {
      const tree = renderer.create(
        <QuestionDetailDisplay
          title="some title 213"
          body="42"
          answer_count={0}
          tags={["hitchhiking"]}
        />
      );

      expect(tree.toJSON()).toMatchSnapshot();
    });
  });
});
