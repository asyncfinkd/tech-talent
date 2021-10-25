// import { NextPage } from "next";
// import React, { useContext, useState } from "react";
// import Box from "@mui/material/Box";
// import { makeStyles } from "@mui/styles";
// import Head from "next/head";
// import { Button } from "components/button";
// import Link from "next/link";
// import { schema } from "schema/login";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { Props } from "types/login";
// import { ApplicationContext } from "context/application/ApplicationContext";
// import { LoginRequest } from "features/login/login.api";
// import { Result } from "types/features/login";
// import { useRouter } from "next/router";
// import { useForm } from "react-hook-form";
// import { useMutation } from "react-query";
// import { ErrorMessage } from "components/error-message";

// const useStyles = makeStyles({
//   root: {},
// });

// const AdminPage: NextPage = () => {
//   //   const classes = useStyles();
//   const router = useRouter();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Props>({ resolver: yupResolver(schema) });
//   const { setAccess_Token } = useContext(ApplicationContext);
//   const [errorMessage, setErrorMessage] = useState<boolean>(false);
//   const [forUser, setForUser] = useState<any>(false);

//   const $login = useMutation(
//     ({ loginData, forUser }: { loginData: Props; forUser: boolean }) =>
//       LoginRequest(loginData, setErrorMessage, forUser)
//   );

//   return (
//     <>
//       <Head>
//         <title>Login with Administrator | Tech Talent</title>
//       </Head>
//       <Box
//         sx={{
//           display: "flex",
//           width: "500px",
//           margin: "auto",
//           flexDirection: "column",
//           maxWidth: "100%",
//         }}
//       >
//         <form
//           onSubmit={handleSubmit((data: Props) => {
//             $login.mutate(
//               { loginData: data, forUser: false },
//               {
//                 onSuccess: (data: Result) => {
//                   document.cookie = `cookie=${data.access_token}`;
//                   setAccess_Token(data.access_token);
//                   router.push("/");
//                 },
//               }
//             );
//           })}
//         >
//           <h1 className="h1-0-2-235">Login</h1>
//           <h2 className="h2-0-2-236">With Administrator</h2>
//           <div className="root-0-2-247">
//             <label className="label-0-2-248">
//               Email{" "}
//               <span
//                 className="asteriskValid-0-2-249"
//                 style={{ display: "inline" }}
//               >
//                 *
//               </span>
//             </label>
//             <input
//               type="text"
//               className={`input-0-2-251 ${errors.email && "invalid-0-2-252"}`}
//               {...register("email")}
//             />
//             <ErrorMessage
//               element="div"
//               className="invalidMessage-0-2-253"
//               condition={errors.email}
//             >
//               {errors?.email?.message}
//             </ErrorMessage>
//           </div>
//           <div className="root-0-2-247">
//             <label className="label-0-2-248">
//               Password{" "}
//               <span
//                 className="asteriskValid-0-2-249"
//                 style={{ display: "inline" }}
//               >
//                 *
//               </span>
//             </label>
//             <input
//               type="password"
//               className={`input-0-2-251 ${errors.password && "invalid-0-2-252"}`}
//               {...register("password")}
//             />
//             <ErrorMessage
//               element="div"
//               className="invalidMessage-0-2-253"
//               condition={errors.password}
//             >
//               {errors?.password?.message}
//             </ErrorMessage>
//           </div>
//           <ErrorMessage
//             element="div"
//             className="errorMessage-0-2-111"
//             condition={errorMessage}
//           >
//             Incorrect email or password
//           </ErrorMessage>
//           <div className="buttonField-0-2-237">
//             <Link href="/">
//               <a className="forgotPassword-0-2-243">Back on Home Page</a>
//             </Link>
//             <Button
//               type="submit"
//               className="root-0-2-46 button-0-2-238 animation-0-2-47 weightMedium-0-2-61 sizeMd-0-2-51 variantPrimary-0-2-54"
//             >
//               Login
//             </Button>
//           </div>
//         </form>
//       </Box>
//     </>
//   );
// };

// export default AdminPage;
