import { FC, useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StaticDatePicker from "@mui/lab/StaticDatePicker";
import isWeekend from "date-fns/isWeekend";
import { CalendarForm, Header } from "../../components";
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
    <>
      <Stack>
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

        <Stack mt={2} alignItems="center">
          <Button
            variant="contained"
            onClick={onDialogOpenHandler}
            sx={{ width: 400 }}
          >
            Добавить событие
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
            <Typography variant="h5">Заголовок</Typography>

            <IconButton size="small" onClick={onDialogCloseHandler}>
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent>
          <CalendarForm />
        </DialogContent>
      </Dialog>
    </>
  );
};
