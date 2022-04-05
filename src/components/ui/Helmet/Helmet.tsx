import { FC } from "react";
import { Helmet as ReactHelmet } from "react-helmet";

interface Props {
  title?: string;
}

/**
 * Компонент работающий с head страницы
 */
export const Helmet: FC<Props> = ({ title, children }) => {
  return (
    <>
      <ReactHelmet>
        <title>{title} | DayViewer</title>
      </ReactHelmet>
      {children}
    </>
  );
};
