'use client';

import {Amplify} from "aws-amplify";
import config from "@/../../amplify_outputs.json";
import React from "react";
import {Authenticator} from "@aws-amplify/ui-react";

Amplify.configure(config, {ssr: true})

const Auth = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Authenticator.Provider>
        {children}
      </Authenticator.Provider>
    </div>
  )
}

export default Auth
