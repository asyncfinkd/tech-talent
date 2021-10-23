import { NextPage } from "next";
import React from "react";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import Head from "next/head";
import { Button } from "components/button";
import Link from "next/link";

const useStyles = makeStyles({
  root: {},
});

const AdminPage: NextPage = () => {
  //   const classes = useStyles();
  return (
    <>
      <Head>
        <title>Login with Administrator | Tech Talent</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          width: "500px",
          margin: "auto",
          flexDirection: "column",
          maxWidth: "100%",
        }}
      >
        <form>
          <h1 className="h1-0-2-235">Login</h1>
          <h2 className="h2-0-2-236">With Administrator</h2>
          <div className="root-0-2-247">
            <label className="label-0-2-248">
              Email{" "}
              <span
                className="asteriskValid-0-2-249"
                style={{ display: "inline" }}
              >
                *
              </span>
            </label>
            <input type="text" className={`input-0-2-251`} />
          </div>
          <div className="root-0-2-247">
            <label className="label-0-2-248">
              Password{" "}
              <span
                className="asteriskValid-0-2-249"
                style={{ display: "inline" }}
              >
                *
              </span>
            </label>
            <input type="text" className={`input-0-2-251`} />
          </div>
          <div className="buttonField-0-2-237">
            <Link href="/">
              <a className="forgotPassword-0-2-243">Back on Home Page</a>
            </Link>
            <Button
              type="submit"
              className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
            >
              Login
            </Button>
          </div>
        </form>
      </Box>
    </>
  );
};

export default AdminPage;
