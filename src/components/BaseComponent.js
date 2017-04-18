import React from 'react';
class BaseComponent extends React.Component {
    props: Object;

   constructor(props: ReactProps) {
      super(props);
      this.props = props;
      this.actions = this.props.actions;

      this.autoBind();
    }

    autoBind() {
        let prototype: Object = Object.getPrototypeOf(this);
        let properties: Array<string> = Object.getOwnPropertyNames(prototype);
        for (let i = 0; i < properties.length; i++) {
            let property: string = properties[i];
            if (typeof this[property] == 'function' && property != "constructor") {
                this[property] = this[property].bind(this);
            }
        }
    }
}
export default BaseComponent;
