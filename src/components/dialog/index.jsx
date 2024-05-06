import { useStoreState, useStoreActions } from "easy-peasy";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const FormDialog = () => {
  const open = useStoreState((state) => state.app.isDialogOpen);
  const closeDialog = useStoreActions((actions) => actions.app.closeDialog);
  const getPlaylist = useStoreActions(actions=> actions.playlist.getPlaylist)

  const createPlaylist = (playlistId) => {
    getPlaylist({playlistId})
  }

  return (
    <>
      <Dialog
        open={open}
        onClose={closeDialog}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const playlistId = formJson.playlistId;
            createPlaylist(playlistId)
            closeDialog();
          },
        }}
      >
        <DialogTitle>Create New Playlist</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new playlist, please enter a valid playlist id or
            playlist link and click on {`'Add playlist'`}
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="playlistId"
            name="playlistId"
            label="Playlist Id or Link"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog}>Cancel</Button>
          <Button type="submit">Add Playlist</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormDialog;
