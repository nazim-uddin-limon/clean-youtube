import { action } from "easy-peasy";

const appModel = {
  isDialogOpen: false,
  openDialog: action((state) => {
    state.isDialogOpen = true;
  }),
  closeDialog: action((state) => {
    state.isDialogOpen = false;
  }),
};

export default appModel