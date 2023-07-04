type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidgit = Draggable & Resizable;

let textBox: UIWidgit = {
  drag: () => {},
  resize: () => {},
};
