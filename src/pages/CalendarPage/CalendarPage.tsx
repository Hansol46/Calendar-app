import { FC, useEffect, useState } from "react";
import isWeekend from "date-fns/isWeekend";
// Material
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
// Icons
import CloseIcon from "@mui/icons-material/Close";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
// Components
import { Page } from "../../components/ui";
import { CalendarForm } from "../../components";
// Hooks
import { useActions, useTypedSelector } from "../../hooks";
// import { Calendar } from "../../models";

// interface CalendarProps {
//   calendar: Calendar;
// }

export const CalendarPage: FC = () => {
  const [value, setValue] = useState<Date | null>(new Date());
  const [open, setOpen] = useState(false);
  const { fetchGuests, fetchEvents } = useActions();

  const { user } = useTypedSelector((state) => state.auth);
  const { events } = useTypedSelector((state) => state.calendar);

  useEffect(() => {
    fetchGuests();
    fetchEvents(user.username);
  }, []);

  console.log("events", events);

  const onDialogOpenHandler = () => setOpen(true);
  const onDialogCloseHandler = () => setOpen(false);
  return (
    <Page title="Календарь">
      <Stack direction="row" gap={3}>
        <Stack flexGrow="1">
          <StaticDatePicker<Date>
            orientation="landscape"
            openTo="day"
            value={value}
            shouldDisableDate={isWeekend}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Stack>

        <Stack gap={3}>
          <Typography>Выберите действие: </Typography>

          <Button
            variant="contained"
            onClick={onDialogOpenHandler}
            sx={{ width: 300 }}
          >
            Добавить событие
          </Button>

          <Button
            variant="contained"
            sx={{ width: 300 }}
          >
            Удалить событие
          </Button>
        </Stack>
      </Stack>

      <Dialog open={open} onClose={onDialogCloseHandler}>
        <DialogTitle>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5">Добавить событие</Typography>

            <IconButton size="small" onClick={onDialogCloseHandler}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <Divider />

        <DialogContent>
          <CalendarForm />
        </DialogContent>
      </Dialog>
    </Page>
  );
};
