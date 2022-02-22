import React from 'react';
import { getHelloWorldMessage } from '../helpers/hello-world';

interface HelloWorldProps {}

export const HelloWorld: React.FC<HelloWorldProps> = () => {
  return <div>{getHelloWorldMessage()}</div>;
};
