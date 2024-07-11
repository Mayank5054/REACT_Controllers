import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { HelloWorld, IHelloWorldProps } from "./HelloWorld";
import * as React from "react";

export class ReactSample implements ComponentFramework.ReactControl<IInputs, IOutputs> {
    private theComponent: ComponentFramework.ReactControl<IInputs, IOutputs>;
    private _notifyOutputChanged: () => void;
    private _container :HTMLDivElement;
    public _value! : string;
    private _context : ComponentFramework.Context<IInputs>
    constructor() { }

   
    public init(
        context: ComponentFramework.Context<IInputs>,
        notifyOutputChanged: () => void,
        state: ComponentFramework.Dictionary,
        container:HTMLDivElement
    ): void {
        this._container = container
        this._context = context;
        this._notifyOutputChanged = notifyOutputChanged;
        this._value = context.parameters.sampleProperty.raw ?? '';
        alert(this._value);
        this._notifyOutputChanged();
        this.handleInputChange = this.handleInputChange.bind(this);
    }


    public handleInputChange(event : React.ChangeEvent<HTMLInputElement>): void {

        console.log(event);
   
    this._value = event.target.value;
    this._notifyOutputChanged();
   
    }


    public updateView(context: ComponentFramework.Context<IInputs>): React.ReactElement {
        // console.log(this._value);
       
        // this._context = context;
        
        // const newValue = (Number)(context.parameters.sampleProperty.raw) ?? 0;
        // if (this._value != newValue) {
        //     this._value = newValue;
            
        // }
        const props: IHelloWorldProps = { name: 'Hello, World!',context:context,callback:this.handleInputChange};
        // this._notifyOutputChanged();

        return React.createElement(HelloWorld,props);
    }


    public getOutputs(): IOutputs {
     
        return { sampleProperty : this._value};
    }

    /**
     * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
     * i.e. cancelling any pending remote calls, removing listeners, etc.
     */
    public destroy(): void {
        // Add code to cleanup control if necessary
    }
}
