// carousel types
export type prevArrow = (args: {
  loop: boolean;
  handlePrev: () => void;
  activeIndex: number;
  firstIndex: boolean;
}) => React.ReactNode | void;

export type nextArrow = (args: {
  loop: boolean;
  handleNext: () => void;
  activeIndex: number;
  lastIndex: boolean;
}) => React.ReactNode | void;

export type navigation = (args: {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  activeIndex: number;
  length: number;
}) => React.ReactNode | void;

export type slideRef = React.Ref<HTMLDivElement>;
