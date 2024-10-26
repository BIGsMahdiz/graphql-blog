import { useMutation } from "@apollo/client";
import { Button, Grid2, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { SEND_COMMENT } from "../graphql/mutations";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const notify = () => toast("");
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    text: "",
  });

  const [sendComment, { loading, data, error, called }] = useMutation(
    SEND_COMMENT,
    {
      variables: {
        name: inputValues.name,
        email: inputValues.email,
        text: inputValues.text,
        slug: slug,
      },
    }
  );
  console.log({ loading, data, error, called });

  const changeHandler = (event) => {
    const inputValue = event.target.value;
    const name = event.target.name;

    setInputValues((value) => ({ ...value, [name]: inputValue }));
  };

  const sendCommentHandler = () => {
    if (inputValues.name && inputValues.email && inputValues.text) {
      sendComment();
      toast.success("کامنت با موفقیت ارسال شد و منتظر تایید می باشد!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setInputValues({ name: "", email: "", text: "" });
    } else {
      toast.error("لطفا تمام فیلد هار پرکنید!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <Grid2
      container
      sx={{
        boxShadow: "rgba(0,0,0,0.1) 0px 4px 12px",
        borderRadius: 4,
        py: 1,
        mt: 5,
      }}
    >
      <Grid2 size={{ xs: 12 }} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          فرم ارسال کامنت شما
        </Typography>
      </Grid2>
      <Grid2 size={{ xs: 12 }} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          sx={{ width: "100%", direction: "rtl" }}
          name="name"
          value={inputValues.name}
          onChange={changeHandler}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          sx={{ width: "100%" }}
          name="email"
          value={inputValues.email}
          onChange={changeHandler}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} m={2}>
        <TextField
          label="کامنت"
          variant="outlined"
          sx={{ width: "100%" }}
          name="text"
          value={inputValues.text}
          onChange={changeHandler}
          multiline
          minRows={4}
        />
      </Grid2>
      <Grid2 size={{ xs: 12 }} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            درحال ارسال ...
          </Button>
        ) : (
          <Button variant="contained" onClick={sendCommentHandler}>
            ارسال
          </Button>
        )}
      </Grid2>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Grid2>
  );
}

export default CommentForm;
