import * as React from "react";
import * as classNames from "classnames";

import "../styles/Status.css";

interface Props {
  status: string;
}

export default class Status extends React.PureComponent<Props> {
  public render() {
    const classes = classNames({
      "Status": true,
      "active": !!this.props.status
    });

    return <div className={classes}>{this.props.status}</div>;
  }
}
