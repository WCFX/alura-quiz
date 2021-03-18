import React from "react";
import {
  BackgroundImage,
  QuizContainer,
  Widget,
  WidgetHeader,
  WidgetContent,
} from "./styles";

export default () => {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <WidgetHeader>
            <h1>React Native</h1>
          </WidgetHeader>
          <WidgetContent>
            <h1>A react framework to build mobile apps </h1>
          </WidgetContent>
          <WidgetHeader>
            <h1>Flutter</h1>
          </WidgetHeader>
          <WidgetContent>
            <h1>A Dart framework to build mobile apps</h1>
          </WidgetContent>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  );
};
