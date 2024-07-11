import * as React from 'react';
import { Label } from '@fluentui/react';
import { IInputs } from './generated/ManifestTypes';

export interface IHelloWorldProps {
  name?: string;
  context : ComponentFramework.Context<IInputs>;
  callback : (event1: React.ChangeEvent<HTMLInputElement>) => void;
 
}

export const  HelloWorld:React.FunctionComponent<IHelloWorldProps> = (prop) =>{
  return (
  <input type="text" name="rangeInput"
  onChange={prop.callback}
  id="rangeInput"
  // value = {prop.value}
  value={prop.context.parameters.sampleProperty.raw!}
  ></input>
)
}

