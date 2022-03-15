import { FC, useState } from "react";
// Material 
import { DatePicker } from "@mui/lab";
import { Box, Button, Grid, MenuItem, Select, TextField } from "@mui/material";
// Hooks
import { useActions, useTypedSelector } from "../../hooks";
// Types
import { Calendar } from "../../models";

export const CalendarForm: FC = () => {
  const [event, setEvent] = useState<Calendar>({
    author: "",
    date: null,
    description: "",
    guest: "",
  });
  const { createEvent } = useActions();
  const { guests, events } = useTypedSelector((state) => state.calendar);
  const { user } = useTypedSelector((state) => state.auth);

/**
 * guest СЛОМАН
 * ПОЧИНИТь SELECT
 */
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    createEvent({ ...event, author: user.username })
    console.log({ ...event, author: user.username });
  };

  return (
    <Box component="form" autoComplete="off" onSubmit={onSubmitHandler} mt={1}>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Название события"
            name="description"
            variant="outlined"
            value={event.description}
            onChange={(e) =>
              setEvent({ ...event, description: e.target.value })
            }
            fullWidth
            required
          />
        </Grid>

        <Grid item xs={12}>
          <DatePicker
            label="Дата события"
            value={event.date}
            onChange={(date) => setEvent({ ...event, date })}
            renderInput={(params) => (
              <TextField {...params} name="date" fullWidth required />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <TextField
            label="Пользователь"
            name="guest"
            variant="outlined"
            // value={event.guest}
            onChange={(guest: any) => setEvent({ ...event, guest })}
            // onChange={(guest) => console.log('guest',guest)}
            select
            fullWidth
            required
          >
            {guests.map(({ username }) => (
              <MenuItem value={username} key={username}>
                {username}
              </MenuItem>
            ))}
          </TextField>
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" type="submit">
            Добавить событие
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
