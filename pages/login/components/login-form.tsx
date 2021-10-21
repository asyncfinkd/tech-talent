import { Button } from "components/button";
import Input from "components/input";
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <form>
        <div>
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
            <Input type="text" className="input-0-2-251 undefined" />
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
            <Input type="password" className="input-0-2-251 undefined" />
          </div>
        </div>
        <div className="buttonField-0-2-237">
          <a className="forgotPassword-0-2-243" href="/forgot">
            Forgot Password?
          </a>
          <Button
            type="submit"
            className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
          >
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
