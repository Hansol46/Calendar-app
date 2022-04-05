import { Box, Container, Stack, Typography } from "@mui/material";
import { FC, ReactElement, ReactNode, useMemo } from "react";
import { Footer } from "../../Footer";
import { ContentPreloader } from "../ContentPreloader";
import { Helmet } from "../Helmet";

interface Props {
  /**
   * Заголовок страницы
   */
  title?: ReactNode;
  /**
   * Кнопки или любые другие элементы
   */
  actions?: ReactElement;
  /**
   * Текст для заголовка в head
   */
  helmetTitle?: string;
  /**
   * Признак отображения прелоадера
   */
  isLoading?: boolean;
}

/**
 * Обертка каждой страницы с заголовком и контейнером
 */
export const Page: FC<Props> = ({
  title,
  actions,
  helmetTitle,
  isLoading,
  children,
}) => {
  const memoHelmetTitle = useMemo(() => {
    if (helmetTitle) return helmetTitle;
    if (typeof title === "string") return title;
    return undefined;
  }, [helmetTitle, title]);

  const memoTitle = useMemo(() => {
    if (!title) return null;
    if (typeof title === "string") {
      return (
        <Box mt={2}>
          <Typography variant="h2" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
        </Box>
      );
    }
    return title;
  }, [title]);

  const memoActions = useMemo(() => {
    if (!actions) return null;
    return <Box>{actions}</Box>;
  }, [actions]);

  return (
    <Helmet title={memoHelmetTitle}>
      <ContentPreloader isLoading={isLoading}>
        <Container maxWidth="lg">
          <Stack gap={3}>
            {(title || actions) && (
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                {memoTitle}
                {memoActions}
              </Stack>
            )}

            {children}
          </Stack>

          <Footer />
        </Container>
      </ContentPreloader>
    </Helmet>
  );
};
