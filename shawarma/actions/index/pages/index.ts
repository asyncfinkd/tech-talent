import Head from "next/head";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ApplicationContext } from "context/application/ApplicationContext";
import { readCookie } from "lib/read-cookie";
import jwt_decode from "jwt-decode";
import { isServer } from "lib/is-server";
import { init_i18n } from "../../../i18n";
import { useEffect, useState } from "react";
import { client } from "lib/query-client";
import { APP__TOKEN__MOCKS__ } from "mocks/_app";
import NProgress from "nprogress";
import Router from "next/router";

export default {
  Head,
  QueryClientProvider,
  ReactQueryDevtools,
  ApplicationContext,
  readCookie,
  jwt_decode,
  isServer,
  init_i18n,
  useEffect,
  useState,
  client,
  APP__TOKEN__MOCKS__,
  NProgress,
  Router,
};
