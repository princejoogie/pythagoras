import { useState } from "react";
import "styles/Admin/AdminCategories.scss";
import CloseIcon from "@material-ui/icons/Close";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import EditIcon from "@material-ui/icons/Edit";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

function Categories() {
  const [categories, setCategories] = useState([
    "Specialty Coffee",
    "Frappe Jelly",
    "Milkshakes",
    "Milk Teas",
    "Fruit Teas",
    "Gourmet Pasta",
    "Pastries & Desserts",
    "Specials",
  ]);

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const items = reorder(
      categories,
      result.source.index,
      result.destination.index
    );

    setCategories(items);
  };

  const handleDelete = (index) => {
    const temp = [...categories];
    temp.splice(index, 1);
    setCategories(temp);
  };

  return (
    <div className="adminCategories">
      <div className="adminCategories__fab">
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </div>
      <div className="adminCategories__title">
        <h1>Categories</h1>
        <p>save changes</p>
      </div>
      <div className="divider" />
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, _) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {categories.map((category, index) => (
                <Draggable key={category} draggableId={category} index={index}>
                  {(provided, _) => (
                    <div ref={provided.innerRef} {...provided.draggableProps}>
                      <Category
                        category={category}
                        index={index}
                        dragHandle={provided.dragHandleProps}
                        handleDelete={handleDelete}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div className="spacer-100" />
    </div>
  );
}

function Category({ category, index, dragHandle, handleDelete }) {
  return (
    <div className="adminCategories__listTile">
      <p>{index + 1}</p>
      <div className="adminCategories__listTile__card">
        <h3>{category}</h3>
        <div>
          <div {...dragHandle}>
            <DragHandleIcon style={{ color: "#212529" }} />
          </div>
          <div
            className="adminCategories__listTile__card__close"
            onClick={() => handleDelete(index)}
          >
            <CloseIcon style={{ color: "#525F7F" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
