import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { Table, Row, Cell, Head, HeaderCell, HeaderRow, Body } from '@zendeskgarden/react-tables';
import { ReactComponent as GripIcon } from '@zendeskgarden/svg-icons/src/12/grip.svg';
import { getColor } from '@zendeskgarden/react-theming';

const DraggableRow = styled(Row)<{ isDraggingOver: boolean }>`
  ${props =>
    props.isDraggingOver
      ? `
  :hover {
    background-color: inherit !important;
  }
`
      : ''}
`;

const DraggableContainer = styled.div`
  color: ${props => getColor('primaryHue', 600, props.theme)};

  &:hover {
    color: ${props => getColor('primaryHue', 700, props.theme)};
  }

  &:focus {
    outline: none;
  }
`;

interface IDraggableCellProps {
  isDragOccurring?: boolean;
  children: any;
}

class DraggableCell extends React.Component<IDraggableCellProps> {
  ref: HTMLTableCellElement | null = null;

  constructor(args: any) {
    super(args);
    this.setRef = this.setRef.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps: IDraggableCellProps) {
    if (!this.ref) {
      return null;
    }

    const isDragStarting = this.props.isDragOccurring && !prevProps.isDragOccurring;

    if (!isDragStarting) {
      return null;
    }

    const { width, height } = this.ref.getBoundingClientRect();

    const snapshot = {
      width,
      height
    };

    return snapshot;
  }

  componentDidUpdate(prevProps: IDraggableCellProps, prevState: any, snapshot: any) {
    const ref = this.ref;

    if (!ref) {
      return;
    }

    if (snapshot) {
      if (ref.style.width === snapshot.width) {
        return;
      }

      ref.style.width = `${snapshot.width}px`;
      ref.style.height = `${snapshot.height}px`;

      return;
    }

    if (this.props.isDragOccurring) {
      return;
    }

    if (ref.style.width === null) {
      return;
    }

    ref.style.removeProperty('height');
    ref.style.removeProperty('width');
  }

  setRef(ref: HTMLTableCellElement | null) {
    this.ref = ref;
  }

  render() {
    return <Cell ref={this.setRef}>{this.props.children}</Cell>;
  }
}

interface IItem {
  id: string;
  name: string;
  description: string;
}

const reorderItems = (list: IItem[], startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);

  result.splice(endIndex, 0, removed);

  return result;
};

interface DragTableProps {
  defaultItems: IItem[];
}

const DragTable = (props: DragTableProps) => {
  const [items, setItems] = useState(props.defaultItems);
  const [recentDragId, setRecentDragId] = useState<string>();

  useEffect(() => {
    if (recentDragId) {
      const draggable = document.getElementById(recentDragId);

      draggable && draggable.focus();
    }
  }, [recentDragId]);

  const onDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const newItems = reorderItems(items, result.source.index, result.destination.index);

      setItems(newItems);
      setRecentDragId(result.draggableId);
    },
    [items]
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Table>
        <Head>
          <HeaderRow>
            <HeaderCell isMinimum hidden>
              Draggable grip
            </HeaderCell>
            <HeaderCell>SLA Policy</HeaderCell>
            <HeaderCell>Description</HeaderCell>
          </HeaderRow>
        </Head>
        <Droppable droppableId="droppable">
          {(droppableProps, droppableSnapshot) => {
            return (
              <Body ref={droppableProps.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <DraggableRow
                        ref={provided.innerRef}
                        isDraggingOver={droppableSnapshot.isDraggingOver}
                        isHovered={snapshot.isDragging}
                        isFocused={
                          droppableSnapshot.isDraggingOver ? snapshot.isDragging : undefined
                        }
                        {...provided.draggableProps.style}
                        {...provided.draggableProps}
                      >
                        <DraggableCell isDragOccurring={snapshot.isDragging}>
                          <DraggableContainer
                            id={item.id}
                            aria-label={item.name}
                            {...provided.dragHandleProps}
                          >
                            <GripIcon />
                          </DraggableContainer>
                        </DraggableCell>
                        <DraggableCell isDragOccurring={snapshot.isDragging}>
                          {item.name}
                        </DraggableCell>
                        <DraggableCell isDragOccurring={snapshot.isDragging}>
                          {item.description}
                        </DraggableCell>
                      </DraggableRow>
                    )}
                  </Draggable>
                ))}
                {droppableProps.placeholder}
              </Body>
            );
          }}
        </Droppable>
      </Table>
    </DragDropContext>
  );
};

export default DragTable;