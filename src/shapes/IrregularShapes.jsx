import React from 'react';
import SvgFilter from './SvgFilter';

export const Polygon = (props) => {
  return (
    <div>
      <div className="polygon">{props.children}</div> <SvgFilter />
    </div>
  );
};
export const LeftTriangle = (props) => {
  return (
    <div>
      <div className="left-triangle">{props.children}</div> <SvgFilter />
    </div>
  );
};
export const Parallelogram = (props) => {
  return (
    <div>
      <div className="parallelogram">{props.children}</div> <SvgFilter />
    </div>
  );
};
export const Sweetlygon = (props) => {
  return (
    <div>
      <div className="sweetlygon">{props.children}</div> <SvgFilter />
    </div>
  );
};
export const FourSidedPolygon = (props) => {
  return (
    <div>
      <div className="four-side-polygon">{props.children}</div> <SvgFilter />
    </div>
  );
};

// export default IrregularShapes
