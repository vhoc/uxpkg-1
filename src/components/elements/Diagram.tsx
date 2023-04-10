/* eslint-disable prettier/prettier */
/* eslint-disable no-extra-boolean-cast */
import React, { useEffect, useState } from "react";
import Xarrow, { Xwrapper, useXarrow } from "react-xarrows";
import "./styles.css";
import { DisplayTypeToIconMap } from "../graphical/ResourceTypesIcons";

interface Column {
  id: string;
  value?: string;
  label: string;
  description?: string;
  route?: Array<any>;
  icon?: any;
  //type?: number;
  type?: string;
  actions?: Array<Action>;
}

interface Arrow {
  startID: string;
  endID: string;
}

interface Action {
  onClick: React.MouseEventHandler<HTMLDivElement>;
  label: string;
  id: string;
  type?: number;
}

interface Props {
  data: Column[][];
  arrows?: Array<Arrow>;
  containerStyle?: object;
  columnStyle?: object;
}

export const Diagram: React.FC<Props> = ({
  data,
  arrows,
  containerStyle,
  columnStyle,
}) => {
  const [selectedPath, setSelectedPath] = useState<string[] | null>(null);
  const [mappedPaths, setMappedPaths] = useState<string[][]>([]);
  const [visible, setVisible] = useState<string>();
  const updateXarrow = useXarrow();

  useEffect(() => {
    const paths = data[0];
    const _statePaths: string[][] = [];
    paths.forEach((element) => {
      if (element.route !== undefined && element.route !== null)
        _statePaths.push([element.id, ...element.route]);
    });
    setMappedPaths(_statePaths);
  }, [data]);

  const handlePath = (node: string, indexX: number, indexY: number) => {
    if (Boolean(data[indexX][indexY].route)) {
      const _path = findArrayWithElement(mappedPaths, node);
      setSelectedPath(_path);
    } else {
      connectPaths({
        startID: node,
        endID: node,
      });
    }
  };

  function findArrayWithElement<T>(arrays: T[][], element: T): T[] {
    const _data = arrays.filter((array) => array.includes(element));
    return _data[0];
  }

  const connectPaths = async (node: Arrow) => {
    const isObject = typeof node === "object";
    const prevNodes = findPath(node.endID, false);
    const nextNodes = findPath(node.startID, true);
    const current = [node.endID, node.startID];

    // setSelectedPath([...current, ...nextNodes, ...prevNodes]);
    // setSelectedPath([...current]);
    if (isObject) {
      setSelectedPath([...current]);
    }
    else {
      setSelectedPath([...current, ...nextNodes, ...prevNodes]);
    }
  };

  const findPath = (node: string, prev: boolean): any[] => {
    if (arrows === undefined) return [];
    const found: string[] = [];
    const elementsFound = arrows.filter((element) =>
      prev ? element.endID === node : element.startID === node
    );
    if (elementsFound.length) {
      elementsFound.forEach((foundElement) => {
        prev
          ? found.push(
            foundElement.startID,
            ...findPath(foundElement.startID, true)
          )
          : found.push(
            foundElement.endID,
            ...findPath(foundElement.endID, false)
          );
      });
    }

    return found;
  };

  const toogleVisible = (id: string) => {
    if (visible === "" || visible !== id) {
      setVisible(id);
    } else if (visible === id) {
      setVisible("");
    }
  };

  type ElementKey = keyof typeof DisplayTypeToIconMap

  return (
    <div
        className="container"
        style={{
        ...containerStyle
        }}
      onScroll={updateXarrow}
    >
      <div className="dia-content">
        <Xwrapper>
          {data.map((column, index) => (
            <div key={index} className="dia-column">
              {column.map((element, i) => {
                return (
                  <div
                    key={`${index}-${i}`}
                    className={`element-container ${index !== data.length - 1 ? "element-col" : ""
                      }`}
                  >
                    <div className="diadropdown">
                      <div
                        id={element.id}
                        className={`dia-row ${!(
                            (element.type !== undefined &&
                              element.type !== null) ||
                            !!element.icon
                          )
                            ? "dia-row_placehold"
                            : ""
                          }`}
                        style={{
                          ...columnStyle,
                        }}
                        onMouseOver={() => handlePath(element.id, index, i)}
                        onMouseLeave={() => setSelectedPath(null)}
                        onClick={() => toogleVisible(element.id)}
                      >
                        {
                            //element.type !== undefined && element.type !== null && element.type < types.length ? (
                          element.type !== undefined && element.type !== null ? (
                          <img
                            //src={`${types[element.type]}`}
                            src={`${DisplayTypeToIconMap[element.type as ElementKey]}`}
                            //alt={types[element.type]}
                            alt={DisplayTypeToIconMap[element.type as ElementKey]}
                            height="100%"
                            width="100%"
                          />
                        ) : element.icon ? (
                          <img
                            src={element.icon}
                            alt={element.value}
                            height="100%"
                            width="100%"
                          />
                        ) : (
                          element.id
                        )}
                      </div>
                      {
                        element.actions && element.actions.length >= 1 ?
                          <div
                            className={`diadropdown-content ${visible === element.id ? "show-dropdown" : "" }`}
                            style={{ zIndex: 9999,}}
                          >
                            {!!element.actions &&
                              element.actions.map((action) => {
                                if (
                                  action.type === element.type ||
                                  action.type === undefined ||
                                  action.type === null
                                ) {
                                  return (
                                    <div
                                      className="actions-text"
                                      key={`option-${action.id}`}
                                      id={`${action.id}`}
                                      onClick={action.onClick}
                                    >
                                      {action.label}
                                    </div>
                                  );
                              } else {
                                return null
                              }
                              })}
                          </div>
                        :
                          null
                      }
                      
                    </div>
                    <div className="text-container">
                      <p className="element-label">{element.label}</p>
                      {element.description && (
                        <p className="element-description">
                          {element.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
              {arrows &&
                arrows.map((arrow, i) => {
                  const hovered =
                    !!selectedPath &&
                    selectedPath.find((id) => arrow.startID === id) &&
                    selectedPath.find((id) => arrow.endID === id);
                  return (
                    <Xarrow
                      key={`arrow-${i}`}
                      color={`${hovered ? "#D8A032" : "#C8CDD4"}`}
                      zIndex={hovered ? 999 : 0}
                      showHead={false}
                      strokeWidth={2}
                      passProps={{
                        onMouseOver: () => {
                          connectPaths(arrow);
                        },
                        onMouseLeave: () => {
                          setSelectedPath(null);
                        },
                      }}
                      end={String(arrow.endID)}
                      start={String(arrow.startID)}
                      endAnchor="left"
                      startAnchor="right"
                    />
                  );
                })}
            </div>
          ))}
        </Xwrapper>
      </div>
    </div>
  );
};

//export default Diagram;