import MainHead from "../components/MainHead";
import * as React from "react";
import Typography from "@mui/joy/Typography";
import Board from "../components/Board";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import Add from "@mui/icons-material/Add";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";

export default function MainPage() {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#121212",
          height: "1000px",
          width: "100%",
        }}
      >
        <MainHead />
        <div
          style={{
            width: "85%",
            marginLeft: "15%",
          }}
        >
          <Typography
            level="h3"
            sx={{
              WebkitTextStroke: "0.1px",
              color: "#EAEAEA",
              padding: "15px",
            }}
          >
            {" "}
            All Boards
          </Typography>
          <div style={{ display: "flex" }}>
            <Card
              onClick={() => setOpen(true)}
              sx={{
                display: "flex",
                width: "400px",
                minWidth: "350px",
                height: "200px",
                backgroundColor: "#272727",
                alignContentContent: "center",
                justifyContent: "right",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "108.5%",
                  height: "80%",
                  backgroundColor: "#F21D6B",
                  marginTop: "-4.2%",
                  borderRadius: "6px",
                }}
              >
                <Add
                  sx={{
                    color: "white",
                    alignSelf: "center",
                    width: "20%",
                    height: "30%",
                  }}
                />
              </div>
              <Typography
                style={{
                  alignSelf: "center",
                  justifyContent: "center",
                  width: "100%",
                  color: "#EAEAEA",
                }}
              >
                Create new
              </Typography>
            </Card>
            <Board />
          </div>
        </div>
      </div>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          style={{
            backgroundColor: "#272727",
            width: "400px",
            height: "300px",
          }}
        >
          <DialogTitle style={{ paddingBottom: "20%", color: "#EAEAEA" }}>
            Create New Board
          </DialogTitle>
          <form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              setOpen(false);
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>
                  <Typography level="h3" style={{ color: "grey" }}>
                    Board Name
                  </Typography>
                </FormLabel>
                <Input
                  required
                  sx={{ backgroundColor: "#272727", color: "#EAEAEA" }}
                  variant="outlined"
                  defaultValue="Untitled Board"
                />
              </FormControl>
              <div
                style={{
                  backgroundColor: "#272727",
                  display: "flex",
                  marginLeft: "81%",
                  width: "15%",
                }}
              >
                <Button
                  sx={{
                    backgroundColor: "#F21D6B",
                    display: "flex",
                    width: "70px",
                  }}
                >
                  Create
                </Button>
              </div>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </div>
  );
}
