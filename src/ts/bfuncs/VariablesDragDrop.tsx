import React, {Component, ReactElement} from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
  DroppableProvided
} from "react-beautiful-dnd";
import clsx from "clsx";
import {
  List,
  ListItem,
  ListItemIcon,
  RootRef,
  Grid,
  Button,
  Typography,
  Chip
} from "@material-ui/core";
import {DragIndicator} from "@material-ui/icons";

interface Variable {
  name: string;
  element: ReactElement;
  index: number;
}

type Props = {
  variables: Variable[];
  rowHeaders: ReactElement[];
  equalsSign: ReactElement;
  className: string;
  onChangeCommitted(newVariables: string[]): void;
  title?: string;
};

type State = {
  reordered: boolean;
  variables: Variable[];
};

class VariablesDragDrop extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      reordered: false,
      variables: props.variables
    };
  }

  handleRecompute = () => {
    this.props.onChangeCommitted(this.state.variables.map((v) => v.name));
    const variables = this.state.variables.map((v, i) => ({
      ...v,
      index: i
    }));
    this.setState({reordered: false, variables});
  };

  handleReset = () => {
    this.setState({
      variables: this.props.variables.slice().sort((a, b) => a.index - b.index),
      reordered: false
    });
  };

  handleDragEnd = (result: DropResult) => {
    document.body.classList.toggle("dragging", false);
    if (!result.destination) return;

    const variables = reorder(
      this.state.variables,
      result.source.index,
      result.destination.index
    );

    let reordered = false;
    let ix = Number.NEGATIVE_INFINITY;
    for (const {index} of variables) {
      if (ix < index) {
        ix = index;
      } else {
        reordered = true;
        break;
      }
    }

    this.setState({variables, reordered});
  };

  onDragStart = () => {
    document.body.classList.toggle("dragging", true);
  };

  render() {
    const {className, rowHeaders, equalsSign, title} = this.props;
    const {variables, reordered} = this.state;
    return (
      <div className={clsx(className, "variables-drag-drop")}>
        <div className="columns-container">
          <div className="column headers">
            {rowHeaders.map((rowHeader, i) => (
              <div key={i} className="header">
                {rowHeader}
              </div>
            ))}
          </div>
          <div className="column equals">
            {rowHeaders.map((_, i) => (
              <div key={i} className="equals-sign">
                {equalsSign}
              </div>
            ))}
          </div>
          <DragDropContext
            onDragStart={this.onDragStart}
            onDragEnd={this.handleDragEnd}
          >
            <Droppable droppableId={"dropsy"}>
              {(provided: DroppableProvided, snapshot) => (
                <RootRef rootRef={provided.innerRef}>
                  <div className="column vars">
                    {variables.map((v, i) => (
                      <Draggable key={v.name} draggableId={v.name} index={i}>
                        {(provided, snapshot) => (
                          <div
                            className={clsx(
                              "draggable-var",
                              snapshot.isDragging && "dragging",
                              snapshot.isDropAnimating && "drop-animating"
                            )}
                            // divider
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={{
                              ...provided.draggableProps.style,
                              ...(snapshot.isDropAnimating && {
                                transition: `all ${snapshot.dropAnimation?.curve} ${snapshot.dropAnimation?.duration}s`,
                                boxShadow: "none"
                              })
                            }}
                          >
                            <div className="content"
                            aria-label={v.name}>
                              {v.element}
                              <DragIndicator color="action" fontSize="small" />
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                </RootRef>
              )}
            </Droppable>
          </DragDropContext>
        </div>
        <div className="buttons-container">
          <Button
            // className={clsx(!reordered && "hidden")}
            disabled={!reordered}
            size="small"
            onClick={this.handleReset}
          >
            Reset
          </Button>
          <Button
            // className={clsx(!reordered && "hidden")}
            size="small"
            variant="outlined"
            disabled={!reordered}
            color="primary"
            onClick={this.handleRecompute}
          >
            OK
          </Button>
        </div>
      </div>
    );
  }
}

function reorder<T>(list: T[], startIndex: number, endIndex: number): T[] {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}

export default VariablesDragDrop;
