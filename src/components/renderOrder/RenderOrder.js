import React from "react";
import {
  getDefaultRenderedOrder,
  getToggledUserPermissions,
  getOverridenRenderedOrder
} from "../../store/selectors";
import { connect } from "react-redux";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { setOverrideRenderOrder } from "../../store/routines";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Container from "@material-ui/core/Container";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

function RenderItem({ c, index }) {
  return (
    <Draggable draggableId={`${c}-${index}`} index={index}>
      {provided => (
        <ListItem
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {c}
        </ListItem>
      )}
    </Draggable>
  );
}

const RenderList = React.memo(({ comp }) => {
  return comp.map((c, index) => (
    <List key={index}>
      <RenderItem c={c} index={index} key={index} />
    </List>
  ));
});

export const RenderOrder = ({ setdefaultOrder, renderOrderToUse }) => {
  const onDragEnd = result => {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }

    const order = reorder(
      renderOrderToUse,
      result.source.index,
      result.destination.index
    );

    setdefaultOrder(order);
  };

  return (
    <Container s={6}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="list">
          {provided => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <RenderList comp={renderOrderToUse} />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

const filterRenderOrder = state => {
  const defaultOrder = getDefaultRenderedOrder(state);
  const overriddenOrder = getOverridenRenderedOrder(state);
  const toggledPermissions = getToggledUserPermissions(state);

  const filterPermissions = orderList =>
    orderList.filter(order => toggledPermissions.includes(order));

  return overriddenOrder.length
    ? filterPermissions(overriddenOrder)
    : filterPermissions(defaultOrder);
};

const mapStateToProps = state => ({
  renderOrderToUse: filterRenderOrder(state)
});

const mapDispatchToProps = dispatch => ({
  setdefaultOrder: newOrder =>
    dispatch(setOverrideRenderOrder.trigger({ value: newOrder }))
});

export default connect(mapStateToProps, mapDispatchToProps)(RenderOrder);
