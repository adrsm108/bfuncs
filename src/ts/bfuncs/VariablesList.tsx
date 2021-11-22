import React, {Component, ReactElement} from "react";
import {Container, Draggable} from "react-smooth-dnd";
import clsx from "clsx";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";
// import {ListItemSecondaryAction, ListTypeMap} from "@material-ui/core";
// import {
//   List,
//   ListItem,
//   ListItemIcon,
//   RootRef,
//   Grid
// } from "@material-ui/core";
// import {DragIndicator} from "@material-ui/icons";

// @ts-ignore
const List = require("@material-ui/core/List");
// @ts-ignore
const ListItem = require("@material-ui/core/ListItem");
// @ts-ignore
const ListItemIcon = require("@material-ui/core/ListItemIcon");
// @ts-ignore
const ListItemText = require("@material-ui/core/ListItemText");
// @ts-ignore
const ListItemSecondaryAction = require("@material-ui/core/ListItemSecondaryAction");
// @ts-ignore
const RootRef = require("@material-ui/core/RootRef");
// @ts-ignore
const Grid = require("@material-ui/core/Grid");
// @ts-ignore
const DragIndicator = require("@material-ui/icons/DragIndicator");
// @ts-ignore
const DragHandle = require("@material-ui/icons/DragHandle");

interface Variable {
  name: string;
  element: ReactElement;
}

type Props = {
  variables: Variable[];
  rowHeaders: ReactElement[];
  className: string;
  onChangeCommitted(newVariables: string[]): void;
};

type State = {
  variables: Variable[];
};

class VariablesList extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      variables: props.variables,
    };
  }

  handleCommitChange = () => {
    this.props.onChangeCommitted(this.state.variables.map((v) => v.name));
  };

  onDrop = (res:any) => {
    const variables = reorder(
      this.state.variables,
      res.removedIndex,
      res.addedIndex
    );
    this.setState({variables});
  };

  render() {
    const {variables} = this.state;
    const {className} = this.props;
    return (
      <Grid container direction="row" className={className}>
        <Grid item>
          <List>
            {this.props.rowHeaders.map((rowHeader, i) => (
              <ListItem key={i} className="row-header">
                {rowHeader}
              </ListItem>
            ))}
          </List>
        </Grid>
        <Grid item>
          <List>
            <Container lockAxis="y" onDrop={this.onDrop}>
              {variables.map(({name, element}) => (
                <Draggable key={name}>
                  <ListItem>
                    {element}
                    <ListItemSecondaryAction>
                      <ListItemIcon>
                        <DragIndicator />
                      </ListItemIcon>
                    </ListItemSecondaryAction>
                  </ListItem>
                </Draggable>
              ))}
            </Container>
          </List>
        </Grid>
      </Grid>
    );
  }
}

function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

export default VariablesList;
